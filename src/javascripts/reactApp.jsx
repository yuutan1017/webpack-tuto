import React, { useState } from "react";
import ReactDom  from "react-dom";

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
      <button onClick={handleMultipl}>add</button>
    </>
  );
};

const reactRoot = document.getElementById("react-root");

if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log("NotFaund");
}
