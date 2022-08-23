const Statistics = (props) => {
  console.log(`Statistics props are`, { props });
  const { statistics1, statistics2, statistics3 } = props;

  const total = statistics1 + statistics2 + statistics3;
  const average = (statistics1 + statistics2 + statistics3) / 3;
  const positive = (statistics1 / total) * 100 + "%";

  if (statistics1 === 0 && statistics2 === 0 && statistics3 === 0) {
    return <div>no statistics yet</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={statistics1} />
          <StatisticsLine text="neutral" value={statistics2} />
          <StatisticsLine text="bad" value={statistics3} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default Statistics;
