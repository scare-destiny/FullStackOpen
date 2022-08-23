import { useState } from "react";
import History from "./history";
import Button from "./button";

const App2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left, amigo'/>
      <Button handleClick={handleRightClick} text='right, amigo' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  );
};

export default App2;
