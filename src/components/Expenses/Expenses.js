import React, { useState } from 'react';

import ExpenseItems from './ExpenseItems';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    // console.log(filteredExpenses);
    return expense.date.getFullYear().toString() === filteredYear;
  })
    
  let expensesContent = <p>No data found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ));
  }
    return (
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      {expensesContent}
      </div>
    );
      
}

export default Expenses;