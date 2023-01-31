import './App.css';
import Expense from './components/Expense';

function App() {
  const  expenses =[
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {date: new Date(2023,1,31),title:'Insurance', amount:70.02},
    {date: new Date(2023,1,31),title:'Transport', amount:60.50},
  ];
  return (
    <div>
      <h2 className='App'>My Expense Tracker </h2>
      <Expense item={expenses}/>
    </div>
  );
}

export default App;
