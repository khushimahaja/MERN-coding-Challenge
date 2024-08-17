
import './App.css';

function App() {
  return (
    

    <div className="flex flex-col items-center justify-start min-h-[80vh] bg-blue-100">
  
        <div className='bg-white text-center w-40 h-40 flex items-center justify-center rounded-full'>
           Transaction Dashboard
  
        </div>
        <div className="flex mt-4 w-full justify-between">
        <div className='bg-orange-300 text-center w-40 h-8 rounded-full  ml-4'>
           Search Transaction
        </div>
        <div className='bg-orange-300 text-center w-40 h-8 rounded-full  mr-4'>
          <select className="w-full h-full bg-orange-300 rounded-full text-center">
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march" selected>March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
          </select>
         </div>
         </div>


  <div className="mt-8 w-full px-4">
    <table className="table-auto w-full bg-white text-center rounded-lg overflow-hidden border-black">
      <thead className="bg-gray-300">
        <tr >
          <th className="p-2 ">Column 1</th>
          <th className="p-2 ">Column 2</th>
          <th className="p-2 ">Column 3</th>
          <th className="p-2">Column 4</th>
          <th className="p-2">Column 5</th>
          <th className="p-2">Column 6</th>
          <th className="p-2">Column 7</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
        </tr>

        <tr>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
          <td className="p-2 border"></td>
        </tr>
        
      </tbody>
    </table>
  </div>

  <div className="flex mt-5 w-full justify-between">
   <div className='ml-10'>
    Page No:
   </div>
   <div className='text-center'>
    Next:
   </div>
   <div className='mr-10'>
    Per Page:
   </div>
  </div>

</div>


    
  );
}

export default App;
