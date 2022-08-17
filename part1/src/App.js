import Hello from './Hello'
import './app.css'

const App = () => {
  const myName = "Borya";

  return (
    <>
      <h1 className='first-class'>Greetings!</h1>
      <Hello name="George" />
      <Hello name="stranger" />
      <Hello name={myName.toUpperCase()} />
   </>
  );
};
export default App;
