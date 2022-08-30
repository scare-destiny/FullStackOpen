import Person from "./Person";

const Persons = ({ persons, filtered, deletePersonOf }) => {
  return (
		<>
			{filtered.map((person) => {
        return (
					<Person
						key={person.id}
						name={person.name}
						number={person.number}
						deletePerson={() => deletePersonOf(person.id)}
					/>
        );
      })}
    </>
  );
};

export default Persons;
