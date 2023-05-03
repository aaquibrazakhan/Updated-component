import ExpensesDate from "./ExpensesDate";
import React from "react";
import "./ExpensesItem.css"
import Card from "../UI/Card";


const ExpensesItem = (props) => {
 
  return (
    <>
      <Card className="expense-item">
       <ExpensesDate date={props.date}/>
        <div className="expense-item__description ">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div> 
      </Card>
    </>
  );
};

export default ExpensesItem;
