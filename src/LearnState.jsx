import React, { useState } from "react";

export default function LearnState() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("Change the Text");
  return (
    <div>
      {value}
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Incerment
      </button>
      <button
        onClick={() => {
          setValue(value > 0 ? value - 1 : value);
        }}
      >
        Decerment
      </button>
      <input placeholder="Enter the text" onBlur={(e)=>{setText(e.target.value)}}/>{text}
    </div>
  );
}
