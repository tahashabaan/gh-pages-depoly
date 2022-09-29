import Cards from "../UI/Cards.js";
import "./ExpenselItem.css";
import ExpendelitemData from "./ExpenselitemData"; 
import React from "react";

 const Expendelitem = (props) => {
  // console.log(props.data);
      return (
      <Cards className="expnse-item">
        <ExpendelitemData data={props.data}/>
        <div className="expnse-item__des">
          <h2> {props.title} </h2>
          <div>${props.amount}</div>
        </div> 
      </Cards>
      ); 
    }
export default Expendelitem;