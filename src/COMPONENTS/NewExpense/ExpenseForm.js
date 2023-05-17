import React from "react";
import './ExpenseForm.css';
const ExpenseForm = () =>{
    return(
        <>
        <form>
            
            <div className="new-expense__controls">
                <div className="new-expense__control label">
                    <label>titel</label>
                    <input type='text'/>
                </div>
                <div className="new-expense__control l">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='number' min="2019-02-24" max="2023-17-05"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expence</button>
            </div>
        </form>
        </>
    )
}

export default ExpenseForm;