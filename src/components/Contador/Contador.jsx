import React, { useState } from "react";

export const Contador = ({ value = 1 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Contador</h1>
      <h2> {counter} </h2>
      <button className="btn btn-success" onClick={handleAdd}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={handleSubtract}>
        -1
      </button>
    </>
  );
};
