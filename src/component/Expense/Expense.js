import Cards from "../UI/Cards.js";
import React , { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expense.css";
import "./ExpenselItem.css";
import ExpenseChart from "./ExpenseChart.js";
const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  // console.log(props.data[2].data);
  const selectYear = (year) => {
    setFilterYear(year);
  }
  const filterExpense = props.data.filter(expense =>
    { return expense.data.getFullYear().toString() === filterYear} )
    console.log("filterExpense ="+filterExpense)
  return (
    <div>
    <Cards className='expense'>
      <ExpenseFilter selected={filterYear} 
       onSelectYear={selectYear}
     />
     <ExpenseChart expense={filterExpense}> </ExpenseChart>
     <ExpensesList items={filterExpense}/>
   </Cards>
   </div>
      )
  }
export default Expense;