// import { useState } from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems(props) {
  // const [expenseTitle, setTitle] = useState(title);
  // const clickHandler = ()=> {
  //   setTitle('Updted!');
  //   // console.log(myTitle);
  // }
    return (
      <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}

export default ExpenseItems;