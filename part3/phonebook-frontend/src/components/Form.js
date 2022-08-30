const Form = (props) => {
  const {
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;
  return (
    <>
      <form onSubmit={addPerson}>
        name: <input value={newName} onChange={handleNameChange} required />
        number: <input value={newNumber} onChange={handleNumberChange} required />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Form;
