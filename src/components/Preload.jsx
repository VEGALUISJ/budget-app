import React, { useState } from "react";
import App from "../App";
import "../preload.css";

const Preload = () => {
  const [done, setDone] = useState(false);

  setTimeout(() => {
    setDone(true);
  }, 3000);

  return (
    <div>
      {!done ? (
        <figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
      ) : (
        <App />
      )}
    </div>
  );
};

export default Preload;
