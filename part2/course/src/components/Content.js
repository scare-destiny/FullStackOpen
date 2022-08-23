import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
	const sum = parts.reduce(
		(previousValue, currentValue) => previousValue + currentValue.exercises,
		0);
	
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
			<Total sum={sum} />
    </div>
  );
};

export default Content;
