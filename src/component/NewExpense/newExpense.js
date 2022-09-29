import React , { useState} from "react";
import NewEXpenseForm from "./NewExpenseForm.js"
import "./NewExpense.css";

const NewEXpense = (props) =>{
const [ isEditing , setIsEditing] =useState(true);
 const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        id:Math.random().toString(),
           ...enteredExpenseData     
      }
      props.onAddExpense(expenseData);
          
    }
    const StartEidtingHandler=() =>{
      setIsEditing(false);
    }
    const StopEidtingHandler=() =>{
      setIsEditing(true);
    }
return (
<div className="new-expense">
   {isEditing && (
    <button className="btn-edit"  onClick={StartEidtingHandler}>
      Add New Expense</button>)}
     {!isEditing && (<NewEXpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancle={StopEidtingHandler}/>)}
</div>);
}
export default NewEXpense;