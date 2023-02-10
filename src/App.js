// import React, {useState} from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import Card from '../src/components/UI/Card';
import NewExpense from './components/NewExpenses/New Expense';
import { useState } from 'react';


function App() {
  const  initialList =[
    {date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {date: new Date(2023,1,31),title:'Insurance', amount:70.02},
    {date: new Date(2023,1,31),title:'Transport', amount:60.50},
    {date: new Date(2023,2,1),title:'Lunch', amount:30.50},
    {date: new Date(2023,2,2),title:'School Fees', amount:410},
  ];

  const [expensesList,setExpensesList] = useState(initialList);

  function newExpenseHandler(receivedExpenses){
      // return(
      //   expensesList.put(receivedExpenses.date, receivedExpenses.title, receivedExpenses.amount)
      // );

      setExpensesList([receivedExpenses, ...initialList]);
  }
  return (
    <Card>
      <h2 className='App'>My Expense Tracker </h2>
      <NewExpense onAddExpense={newExpenseHandler} />
      <Expense expenses={expensesList}/>
    </Card>
  );
}

export default App;
