import Country from "./Country";
import MiniCard from "./MiniCard";


const Countries = ({ countries }) => {
  if (countries.length === 1) {
    return (
      <>
        {countries.map((country) => (
          <MiniCard
            key={country.capital}
            capital={country.capital}
            area={country.area}
            languages={country.languages}
						flag={country.flags.png}
						country={country}
					/>
					 ))}
				
      </>
    );
  }
  if (countries.length >= 10) {
    return <div>specify your request</div>;
  }
  return (
    <ul>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </ul>
  );
};

export default Countries;
