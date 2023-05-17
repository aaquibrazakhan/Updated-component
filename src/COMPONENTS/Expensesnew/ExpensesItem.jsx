import ExpensesDate from "./ExpensesDate";
import React, { useState } from "react";
import "./ExpensesItem.css"
import Card from "../UI/Card";


const ExpensesItem = (props) => {

  const [title, setTitel]= useState(props.title)

  const clickHandler = () =>{
    setTitel('updated ! ')
    console.log(title);
  }
 
  return (
    <>
      <Card className="expense-item">
       <ExpensesDate date={props.date}/>
        <div className="expense-item__description ">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div> 
        <button onClick={clickHandler}>changeTittel</button>
      
      </Card>
    </>
  );
};

export default ExpensesItem;
