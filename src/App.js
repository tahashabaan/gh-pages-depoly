import Expense from './component/Expense/Expense.js';
import NewEXpense from './component/NewExpense/newExpense';
import './App.css';
import React , { useState } from 'react';
//  // import { Component } from 'react';
const App = () => {
let DUMY_EXPENSE = [
 {id:"el1",title:"tah1",amount:524,data:new Date()},{id:"el2",title:"tah2",amount:524,data:new Date()},
 {id:"el3",title:"tah3",amount:524,data:new Date()},
 {id:"el4",title:"tah4",amount:524,data:new Date()}
];

const [expenses , setExpenses] =
                  useState  (DUMY_EXPENSE);

  const onAddExpenseData = (expenseData) => {
    setExpenses((preExpense) => {
      return [expenseData , ...preExpense]}) ;
  }    
  console.log("expense " + expenses)   
  return(
    <div className='app-expense'>
      <NewEXpense onAddExpense =      {onAddExpenseData}/>
      <Expense data = {expenses}  />
    </div>
     );  
}
export default App;
