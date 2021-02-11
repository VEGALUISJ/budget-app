import React, { useState, Fragment } from "react";
import Questions from "./components/questions";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showquestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <header>
      <h1>Budget App</h1>
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
              <Form addNewExpense={addNewExpense} />
            </div>
            <div className="main-content4 content">
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
