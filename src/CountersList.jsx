import React, { useState } from "react";
import Counter from "./components/Counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 5, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 3, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((c) => (c.id === id ? { ...c, value: c.value + 1 } : c))
    );
  };
  const handleDecrement = (id) => {
    setCounters(
      counters.map((c) => (c.id === id ? { ...c, value: c.value - 1 } : c))
    );
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          onDelete={handleDelete}
          {...counter}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
