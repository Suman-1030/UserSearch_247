import { useState } from "react";
import "./App.css";
import { searchConfig } from "./Config/SearchConfig";
import Dynamic from "./Config/Dynamic";
import DynamicTable from "./Config/DynamicTable";
import { Tableconfig } from "./Config/TableConfig";

function App() {
  const [res, setRes] = useState(null);

 
  async function findCustomer(values: any) {
    console.log("Form submitted:", values);
    

    try {
    
      const response = await fetch("http://localhost:3001/customers");
      const data = await response.json();

     
      const filtered = data.filter(
        (c: any) =>
          (!values.firstName || c.firstName.toLowerCase().includes(values.firstName.toLowerCase())) &&

          (!values.lastName || c.lastName.toLowerCase().includes(values.lastName.toLowerCase()))  && 

          (!values.dateOfBirth || c.dateOfBirth.includes(values.dateOfBirth))
      );

      setRes(filtered);
      console.log("Filtered result:", filtered);


    } catch (err) {
      console.error("Error :", err);
    }
  }

  
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10 ">

        <h2 className="text-2xl font-semibold mb-6">
          Search Customers
        </h2>
    
      
        <div className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md mb-10">
          <Dynamic config={searchConfig} onSubmit={findCustomer} />
        </div>
    
      
        <div className="w-full max-w-[900px] p-6 rounded-lg ">
          <DynamicTable config={Tableconfig} filtered={res} />
        </div>
      </div>
    );
    

}

export default App;
