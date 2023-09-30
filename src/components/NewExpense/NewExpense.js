import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=> {

    const SaveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>

}

export default NewExpense;