import React, { Fragment, useState } from "react";
import Error from "./Error";

const Questions = ({ setBudget, setRemaining }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
  };

  return (
    <Fragment>
      <h2>Set Your Budget</h2>

      {error ? <Error message="The Budget is not Valid" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="type your budget here"
          onChange={handleChange}
        />
        <button type="submit" className="button-primary u-full-width">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Questions;
