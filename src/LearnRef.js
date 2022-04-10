import React, { useRef } from "react";

export default function LearnRef() {
  const inputRef = useRef(null);
  const data = [];
  const onChange = () => {
    data.push(inputRef.current.value);
    console.log(inputRef);
    console.log(data);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <input type="text" placeholder="hello" ref={inputRef} />{" "}
      <button onClick={onChange}>Clear</button>
    </div>
  );
}
