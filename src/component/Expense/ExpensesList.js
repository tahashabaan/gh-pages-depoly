import React from 'react';
import Expendelitem from './Expenselitem';
import "./ExpensesList.css";
 const ExpensesList = (props) => {
  if(props.items.length === 0)
    return <h2 className='expense-List__claback'>
      no found Expense. </h2>
  return (
   <ul className='expense-List'>
     {props.items.map( expense =>
      <Expendelitem 
      key= {expense.id}
      title={expense.title} 
      data={expense.data}
      amount={expense.amount} 
       />)
      }
   </ul>
  )
}
export default ExpensesList;