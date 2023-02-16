import React, {useState} from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('2020-01-02');
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
        const date = new Date(event.target.value);
        setEnteredDate(date);
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
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls ">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='01-01-2020' onChange={dateChangeHandler} value={enteredDate} ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;