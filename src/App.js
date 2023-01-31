import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const  expenses =[
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
  ];
  return (
    <div>
      <h2>My Expense Tracker </h2>
      <ExpenseItem 
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem 
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem 
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
