import axios from "axios";
import { useState } from "react";
import { Button } from "./Button";
import Card from "./Card";
import MiniCard from "./MiniCard";

const Country = ({ country }) => {
  const [isShown, setIsShown] = useState(false);
 

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <h2>{country.name.common}</h2>
      <li>
        <Button handleClick={handleClick} />
      </li>
      {isShown && (
        <MiniCard
          key={country.capital}
          capital={country.capital}
          area={country.area}
          languages={country.languages}
          flag={country.flags.png}
          temperature='test'
          coordinates={country.capitalInfo.latlng}
          country={country}
        />
      )}
    </>
  );
};

export default Country;
