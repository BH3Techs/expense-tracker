import './App.css';
import Expense from './components/Expenses/Expense';
import Card from '../src/components/UI/Card';
import NewExpense from './components/NewExpenses/New Expense';

function App() {
  const  expenses =[
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {date: new Date(2023,1,31),title:'Insurance', amount:70.02},
    {date: new Date(2023,1,31),title:'Transport', amount:60.50},
    {date: new Date(2023,2,1),title:'Lunch', amount:30.50},
    {date: new Date(2023,2,2),title:'School Fees', amount:410},
  ];
  return (
    <Card>
      <h2 className='App'>My Expense Tracker </h2>
      <NewExpense />
      <Expense expenses={expenses}/>
    </Card>
  );
}

export default App;
