import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);

        // console.log(expenseData);
    }
    return(
        <div className='new-expense'>
            <NewExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;