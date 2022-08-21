import { useState } from "react";

export default function Count(props) {
  const [count, setCount] = useState(0);

  const increaceHandler = () => {
    setCount((c) => c + 1);
  };

  const decreaceHandler = () => {
    setCount((c) => c - 1);
  };

  const clearHandler = () => {
    setCount(0);
  };

  if (count < 0) {
    setCount(0);
  }

  return (
    <article>
      <h1>{count}</h1>
      {count > 10 ? <h2>You reach 10!</h2> : null}
      <button onClick={decreaceHandler}>-</button>
      <button onClick={clearHandler}>clear</button>
      <button onClick={increaceHandler}>+</button>
    </article>
  );
}
