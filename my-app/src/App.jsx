import CheckAge from './CheckAge';
function App() {
  const logToConsole = () => {
    console.log('logged')
  }
  return (
    <>

    <CheckAge myBirthYear={19+20} name='TNQ' logto={logToConsole} />
    </>
  );
}
export default App;
