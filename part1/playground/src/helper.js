const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old. 
        So you seem to be born in{" "}
        {bornYear()}
      </p>
    </div>
  );
};

export default Hello;
