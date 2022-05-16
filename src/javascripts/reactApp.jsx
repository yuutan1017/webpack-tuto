import React, { useState } from "react";
import ReactDom  from "react-dom";

import Alert from "./alert.tsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [multipl, setMultipl] = useState(1);
  const handleMultipl = () => {
    setCount(count + 1);
    setMultipl(multipl * 2);
  }
  return (
    <>
      <h1>2の{count}乗 = {multipl}</h1>
      <button onClick={handleMultipl}>Multipl</button>
      <Alert message="success!"/>
    </>
  );
};

const reactRoot = document.getElementById("react-root");

if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log("NotFaund");
}
