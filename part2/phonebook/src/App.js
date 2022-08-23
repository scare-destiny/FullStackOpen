import { useState, useEffect } from "react";
import "./App.css";
import personsService from "./services/persons";
import Notification from "./components/Notification";
import Failure from "./components/Failure";
import Persons from "./components/Persons";
import Form from "./components/Form";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("add name plz");
  const [newNumber, setNewNumber] = useState("add phone number");
  const [searchInput, setSearchInput] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "people");

  const addPerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: newName,
    };
    let duplicates = 0;

    for (let i = 0; i < persons.length; i++) {
      if (isNameAdded(nameObject, persons[i])) {
        duplicates += 1;

        if (
          window.confirm(
            `${nameObject.name} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          personsService
            .update(persons[i].id, { ...persons[i], number: newNumber })
            .then((returnedPerson) => {
              setSuccessMessage(
                `Updated ${returnedPerson.name}'s number to ${returnedPerson.number}`
              );
              setTimeout(() => {
                setSuccessMessage(null);
              }, 3000);
              setPersons(
                persons.map((person) =>
                  person.id !== persons[i].id ? person : returnedPerson
                )
              );
            })
            .catch((error) => {
              setFailureMessage(
                `Information of ${persons[i].name} has already been removed from the server`
              );
              setTimeout(() => {
                setFailureMessage(null);
              }, 3000)
              setPersons(persons.filter((person) => person.id !== persons[i].id))
            });
        }
      }
    }

    if (duplicates === 0) {
      personsService.create(nameObject).then((returnedPerson) => {
        setSuccessMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  function isNameAdded(obj1, obj2) {
    return obj1.name.toLowerCase() === obj2.name.toLowerCase();
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filtered = !searchInput
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
      );

  const deletePersonOf = (id) => {
    if (window.confirm("are you sure?")) {
      const url = `http://localhost:3001/notes/${id}`;
      const person = persons.find((p) => p.id === id);

      personsService.deleteNote(id).then((returnedPerson) => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={successMessage} />
      <Failure message={failureMessage} />
      <Search
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
      />
      <h2>add a new</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <div>
        <h2>Numbers</h2>
        <Persons
          persons={persons}
          filtered={filtered}
          deletePersonOf={deletePersonOf}
        />
      </div>
    </div>
  );
};
// name: <input value={newName} onChange={handleNameChange} />

export default App;
