const express = require('express');
const mongoose = require('mongoose')
const axios = require('axios')
const dotenv = require('dotenv')
const Transaction = require('../models/Transaction')

dotenv.config();

const app = express()
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/seedDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Mongodb connected'))
.catch(err=> console.error(err));

app.post('/api/seed',async(req,res)=>{
    try{
        const response = await axios.get(' https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;

        await Transaction.deleteMany();

        await Transaction.insertMany(transactions);

        res.status(200).send('database seed successfully')

    }catch(err){
        console.error(err);
        res.status(500).send('Error seeding database');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`server running on port ${PORT}`))

app.get('/api/transactions',async(req,res) => {
    const {page = 1, per_page = 10, search = '', month} = req.query;
    const limit  = parseInt(per_page)
    const skip = (page - 1) * limit;

    const query = {
        dateOfSale: { $gte: new Date(`${month}-01`), $lt: new Date(`${month}-31`) },
        $or: [
          { title: new RegExp(search, 'i') },
          { description: new RegExp(search, 'i') },
          { price: new RegExp(search, 'i') },
        ],
      };

      try {
        const transactions = await Transaction.find(query).skip(skip).limit(limit);
        res.json(transactions);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching transactions');
      }
    });

    app.get('/api/statistics', async (req, res) => {
        const { month } = req.query;
        const startDate = new Date(`${month}-01`);
        const endDate = new Date(`${month}-31`);
      
        try {
          const totalSales = await Transaction.aggregate([
            { $match: { dateOfSale: { $gte: startDate, $lt: endDate }, sold: true } },
            { $group: { _id: null, totalAmount: { $sum: '$price' } } },
          ]);
      
          const soldItems = await Transaction.countDocuments({ dateOfSale: { $gte: startDate, $lt: endDate }, sold: true });
          const notSoldItems = await Transaction.countDocuments({ dateOfSale: { $gte: startDate, $lt: endDate }, sold: false });
      
          res.json({ totalSales, soldItems, notSoldItems });
        } catch (err) {
          console.error(err);
          res.status(500).send('Error fetching statistics');
        }
      });
      
    

