import React, { useState, Fragment } from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Add your expenses here</h2>

      <form onSubmit={handleSubmit}>
        <label>Expense Name</label>
        <input
          type="Text"
          className="u-full-width field"
          placeholder="Ex. Bills, Rent, Insurance, etc"
        />

        <label>Expense Amount</label>
        <input
          type="number"
          className="u-full-width field"
          placeholder="Ex. $300, $1000, etc"
        />

        <button type="submit" className="button-primary u-full-width">
          + Add Expense
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
