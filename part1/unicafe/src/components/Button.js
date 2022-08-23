const Button = ({ handleFeedback, text }) => {
  return (
    <div className="btnContainer">
      <button onClick={handleFeedback}>{text}</button>
    </div>
  );
};

export default Button;
