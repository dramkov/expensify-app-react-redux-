import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import "./firebase/firebase";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109500 }));
// store.dispatch(setTextFilter(""));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
