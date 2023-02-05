import React, {useState} from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    return(
        <form>
            <div className="new-expense__controls ">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2025-12-31' onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;