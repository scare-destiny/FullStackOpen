
import "./App.css";
import Hello from "./helper.js";
import { useState } from "react";
import App2 from "./complexState";
import Factory from './factoryFunction'


const Display = ({ counter }) => <>{counter}</>;

const Button = ({ onClick, text }) => {
  return (
    <div className="button-container">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Increment" />
      <Button onClick={decreaseByOne} text="Minus one" />
      <Button onClick={setToZero} text="Nullify!!!" />
      <App2 />
      <Factory header={'Factory Functions'}/>
    </div>
  );
};

export default App;
