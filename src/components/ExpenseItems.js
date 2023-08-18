import { useState } from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems({title, amount, date}) {
  const [expenseTitle, setTitle] = useState(title);
  const clickHandler = ()=> {
    setTitle('Updted!');
    // console.log(myTitle);
  }
    return (
      <div className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Button</button>
      </div>
    );
}

export default ExpenseItems;