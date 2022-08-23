const Person = ({ name, number, deletePerson }) => {
  return (
    <li>
      {name} {number}
      <button onClick={deletePerson}>click me boyo</button>
    </li>
  );
};

export default Person;
