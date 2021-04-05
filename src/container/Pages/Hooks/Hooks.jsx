import React, { useState } from "react";
import "./Hooks.css";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container-hooks">
      <p>Nilai Sekarang: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Value</button>
    </div>
  );
};

export default Hooks;
