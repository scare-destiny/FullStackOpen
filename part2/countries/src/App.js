import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Components/Countries";
import Search from "./Components/Search";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [temperature, setTemperature] = useState([]);


  useEffect(() => {
    const getCountrires = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);

        setError(null);
      } catch (err) {
        setError(err.messsage);
        setCountries(null);
      } finally {
        setLoading(false);
      }
    };
    getCountrires();
  }, []);

  const filtered = !searchInput
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <Search
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
      />
      <Countries countries={filtered} handleClick />
    </div>
  );
}

export default App;
