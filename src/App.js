import logo from './logo.svg';
import './App.css';
import PersonCard from './componenets/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = "Crocker" firstName = "Richard" age = {30} hairColor = "Black"/>
      <PersonCard lastName = "Liu" firstName = "Eric" age = {30} hairColor = "Black"/>
      <PersonCard lastName = "Torres" firstName = "Daisy" age = {25} hairColor = "Brown"/>
      <PersonCard lastName = "Looby" firstName = "Anthony" age = {28} hairColor = "Black"/>
    </div>
  );
}

export default App;
