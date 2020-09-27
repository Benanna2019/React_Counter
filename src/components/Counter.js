import React, { useState } from "react";

export default function Counter({ initialCount }) {
  const [number, setCount] = useState({ count: initialCount });
  return (
    <div>
      <button
        onClick={() =>
          setCount((prevNumber) => {
            return;
            {
              count: prevNumber.count - 1;
            }
          })
        }
      >
        -
      </button>
      <span>{number.count}</span>
      <button
        onClick={() =>
          setCount((prevNumber) => {
            return;
            {
              count: prevNumber.count + 1;
            }
          })
        }
      >
        +
      </button>
    </div>
  );
}
