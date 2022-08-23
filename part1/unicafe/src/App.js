import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = (props) => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleFeedback={() => setGood(good + 1)} text="good" />
      <Button handleFeedback={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleFeedback={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics
        statistics1={good}
        statistics2={neutral}
        statistics3={bad}
      />
    </div>
  );
};

export default App;
