import React, {useState} from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');

    //using one state to listen for Data change

    //    const [userInput, setUserInput] = useState({
    //         enteredTitle: '',
    //         enteredDate: '',
    //         enteredAmount: ''
    //     });
        
    // function titleChangeHandler(event){
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     });
    // }

    // function titleChangeHandler(event){
    //     setUserInput((prevState) =>{
    //         return{...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // }
    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredAmount)
        }

        console.log(expenseData);
    };
    return(
        <form onSubmit={submitHandler}>
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