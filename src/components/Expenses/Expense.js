import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';

import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

function Expense(props){
    const [year, setYear] = useState('2020');
    
    function selectedYear(theYear){
      setYear(theYear);
    }

    return(
      <div>
      <Card className="expense">
        <ExpenseFilter defaultValue={year} onSelectingYear={selectedYear}/>
        {props.expenses.map(expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}/>)}
        {/* <ExpenseItem 
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem 
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem 
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem 
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        ></ExpenseItem>
        <ExpenseItem 
          date={props.expenses[4].date}
          title={props.expenses[4].title}
          amount={props.expenses[4].amount}
        ></ExpenseItem> */}
      </Card>
      </div>
    
    );
}

export default Expense;