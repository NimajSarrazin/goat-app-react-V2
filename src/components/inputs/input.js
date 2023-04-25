import React from "react";

export default function input
({ label, type = "text", name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input className="block  border border-gray-400 rounded-lg mt-2 p-1"
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange}/>
    </div>
  );
}
