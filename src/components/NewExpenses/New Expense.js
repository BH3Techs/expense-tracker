import React, {useState} from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setIsEditing(false)

        // console.log(expenseData);
    }

    function isEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <NewExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}
export default NewExpense;