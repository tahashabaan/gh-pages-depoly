import "./ExpenselItem.css";
import "./ExpenselitemData.css";
import React from "react";
const ExpendelitemData=(props) => {
  const month =props.data?.toLocaleString("en-US", { month: "long" });
  const day = props.data?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.data?.getFullYear();
  return(
    <div className="expnse-item__data">
      <div className="expnse-item__month">{month}</div>
      <div className="expnse-itme__day">{day}</div>
      <div className="expnse-item__year">{year}</div>
    </div>
  );
}
  export default ExpendelitemData;