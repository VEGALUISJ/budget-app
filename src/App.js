import React, { useState } from "react";
import Questions from "./components/questions";
import Form from "./components/Form";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <header>
      <h1>Budget App</h1>
      <div className="main-content content">
        <Questions setBudget={setBudget} setRemaining={setRemaining} />
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </header>
  );
}

export default App;
