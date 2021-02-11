import React from "react";

const Expense = ({ expense }) => {
  return (
    <li className="expense">
      <p>
        {expense.name}

        <span className="expense">$ {expense.amount}</span>
      </p>
    </li>
  );
};

export default Expense;
