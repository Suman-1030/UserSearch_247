import React from "react";

function DynamicTable({ config, filtered }) {
  
  const columns = Object.entries(config.fields)

  return (
    
      
      <div className="w-full sm:w-[90%] md:w-[800px] bg-white p-4 shadow rounded overflow-x-auto ">

      <table className=" rounded-2xl mx-auto w-[100%]  ">
       
        <thead className="bg-blue-600 text-white ">
          <tr>
            {columns.map(([key, field]) => (
              <th key={key} className="p-2 border text-left">
                {field.label}
              </th>
            ))}
          </tr>
        </thead>

          <tbody>
          {filtered?.length > 0 ? (
            filtered.map((item:any, index:any) => (
              <tr key={index} className="bg-gray-100">

                {columns.map(([key]) => (

                  <td key={key} className="p-2 border">
                      {key==='phones' ? item.phones.find((e:any)=>e.isPrimary)?.number || "-" 

           :key==='emails' ? item.emails.find((d:any)=>d.isPrimary)?.address || "-" : item[key]}
                  </td>

                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-3 text-gray-500"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    
  );
}

export default DynamicTable;
