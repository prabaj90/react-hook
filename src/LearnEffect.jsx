import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LearnEffect() {
  const [run, setRun] = useState(false);
  const [dontRun, setDontRun] = useState(false);
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments").then((res) => {
      console.table(res.data);
    });
    console.log("API Called");
  }, [run]);
  console.log(dontRun);
  return (
    <div>
      <button
        onClick={() => {
          setRun(!run);
        }}
      >
        Run
      </button>
      <button
        onClick={() => {
          setDontRun(!dontRun);
        }}
      >
        Dont Run
      </button>
    </div>
  );
}
