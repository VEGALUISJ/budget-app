import React from "react";
import Expense from "./Expense";

const List = ({ expenses, deleteExpense }) => {
  return (
    <div className="expenses-made">
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default List;
