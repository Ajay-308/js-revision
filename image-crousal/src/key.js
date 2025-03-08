import React, { useState } from "react";

export default function KeyDemo() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  // Add a new item at the beginning
  const addItem = () => {
    setItems(["Mango", ...items]);
  };

  return (
    <div className="p-4">
      <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Add Mango
      </button>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Without Keys (Uses Index) */}
        <div>
          <h2 className="font-bold text-lg">Without Key</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="p-2 border">{item} (Index: {index})</li>
            ))}
          </ul>
        </div>

        {/* With Unique Keys */}
        <div>
          <h2 className="font-bold text-lg">With Unique Key</h2>
          <ul>
            {items.map((item) => (
              <li key={item} className="p-2 border">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
