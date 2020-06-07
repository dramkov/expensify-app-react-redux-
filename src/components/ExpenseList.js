import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List </h1>
    {props.expenses.map((exp) => {
      return <ExpenseListItem key={exp.id} {...exp} />;
    })}
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatetoProps)(ExpenseList);
