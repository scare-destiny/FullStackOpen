import { useState } from "react";
import Button from "./Button";
import BestAnecdote from "./BestAnecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setVote] = useState(Array(anecdotes.length).fill(0));
  const len = anecdotes.length;

  const generateRandomAnecdote = (e) => {
    setSelected(Math.floor(Math.random() * len));
  };

  const voteForAnecdote = () => {
    const allVotesCopy = [...allVotes];
    allVotesCopy[selected] += 1;
    setVote(allVotesCopy);
  };

  const maxAnecdoteIndex = allVotes.indexOf(Math.max(...allVotes));

  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={generateRandomAnecdote} text="random anecdote" />
      <Button handleClick={voteForAnecdote} text="vote" />
      {anecdotes[maxAnecdoteIndex]}
    </div>
  );
};



export default App;
