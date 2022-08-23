import Weather from "./Weather";

const MiniCard = ({ capital, area, languages, flag, country}) => {
  const languagesArray = Object.values(languages);
  return (
    <>
      <h4></h4>
      <p>capital: {capital}</p>
      <p>area: {area}</p>
      <p>Languages</p>
      <ul>
        {languagesArray.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={flag} alt="flag" />
      <Weather country={country } />
    </>
  );
};


export default MiniCard;
