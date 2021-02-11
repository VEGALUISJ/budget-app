import { nanoid } from "nanoid";
import React, { useState, Fragment } from "react";
import Error from "./Error";

const Form = ({ addNewExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate

    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //build expense

    const expense = {
      name,
      amount,
      id: nanoid(),
    };

    //send expense thru main component
    addNewExpense(expense);

    //reset from
    setName("");
    setAmount("");
  };

  return (
    <Fragment>
      <h2>Add your expenses here</h2>

      {error ? (
        <Error message="All fields are required or Invalid Amount" />
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Expense Name</label>
        <input
          type="Text"
          className="u-full-width field"
          placeholder="Ex. Bills, Rent, Insurance, etc"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Expense Amount</label>
        <input
          type="number"
          className="u-full-width field"
          placeholder="Ex. $300, $1000, etc"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value), 10)}
        />

        <button type="submit" className="button-primary u-full-width">
          + Add Expense
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
