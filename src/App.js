// import React, {useState} from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import Card from '../src/components/UI/Card';
import NewExpense from './components/NewExpenses/New Expense';
import { useState } from 'react';


function App() {
  const  initialList =[
    {id:1,date: new Date(2023,1,31),title:'Toilet Paper', amount:12.90},
    {id:2,date: new Date(2022,1,31),title:'Insurance', amount:70.02},
    {id:3,date: new Date(2023,1,31),title:'Transport', amount:60.50},
    {id:4,date: new Date(2021,2,1),title:'Lunch', amount:30.50},
    {id:5,date: new Date(2021,2,2),title:'School Fees', amount:410},
  ];

  const [expensesList,setExpensesList] = useState(initialList);

  function newExpenseHandler(receivedExpenses){
      // return(
      //   expensesList.put(receivedExpenses.date, receivedExpenses.title, receivedExpenses.amount)
      // );

      setExpensesList(prevExpenses =>{
        return [receivedExpenses, ...prevExpenses]
      });

      console.log(receivedExpenses)
  };
  return (
    <Card>
      <h2 className='App'>My Expense Tracker </h2>
      <NewExpense onAddExpense={newExpenseHandler} />
      <Expense expenses={expensesList}/>
    </Card>
  );
}

export default App;
