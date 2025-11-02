import React, { useState } from "react";

function Dynamic({ config, onSubmit }: any) {

  const [formData, setFormData] = useState({});

  // Handle input changes
  function handleChange(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  // Handle form submit
  function handleSubmit(e:any) {
    e.preventDefault();
    onSubmit(formData); 
  }

  const fields = Object.entries(config.fields);

  return (
    <div >
    <form onSubmit={handleSubmit}className="mb-3 mx-auto w-500">
      {fields.map(([k, v]) => (
        <div key={k} className="mb-3 mx-auto ">
          <label className="block font-semibold mb-1">{v.label}</label>
          <input
            type={v.uiType}
            name={k}
            value={formData[k] || ""}
            placeholder="Enter here"
            className="border p-2 rounded w-full"
            onChange={(e) => handleChange(k, e.target.value)}
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3 mx-auto"
      >
        Submit
      </button>
    </form>
  </div>);
}

export default Dynamic;
