import React, { useState, Fragment, useEffect } from "react";
import Questions from "./components/questions";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";
import BudgetControl from "./components/Budgetcontrol";
import Preload from "./components/Preload";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showquestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [newExpense, setNewExpense] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    //add new budget
    if (newExpense) {
      setExpenses([...expenses, expense]);
    }

    //Substraction from actual budget
    const remainingBudget = remaining - expense.amount;
    setRemaining(remainingBudget);

    //Reset to false
    setNewExpense(false);
  }, [expense]);

  return (
    <header>
      <h1>Budget Control App</h1>
      {showquestion ? (
        <Fragment>
          <div className="main-content content">
            <Questions
              setBudget={setBudget}
              setRemaining={setRemaining}
              setQuestion={setQuestion}
            />
          </div>
          <Footer classForResponsive={"footer2"} />
        </Fragment>
      ) : (
        <Fragment>
          <div className="main-content2">
            <div className="main-content3 content">
              <Form setExpense={setExpense} setNewExpense={setNewExpense} />
            </div>
            <div className="main-content4 content">
              <h2>List</h2>
              <BudgetControl budget={budget} remaining={remaining} />
              <List expenses={expenses} />
            </div>
          </div>
          <Footer classForResponsive={"footer1"} />
        </Fragment>
      )}
    </header>
  );
}

export default App;
