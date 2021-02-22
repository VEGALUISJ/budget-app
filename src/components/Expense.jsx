import React from "react";

const Expense = ({ expense, deleteExpense }) => {
  return (
    <li className="expense">
      <p>
        {/* <button
          className="alert-danger"
          onClick={() => deleteExpense(expense.id)}
        >
          {" "}
          x{" "}
        </button> */}
        {expense.name}
        <span className="expense">$ {expense.amount}</span>
      </p>
    </li>
  );
};

export default Expense;
