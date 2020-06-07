import expensesReduce from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("should set default state", () => {
  const state = expensesReduce(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReduce(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should  not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReduce(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Coffee",
    note: "",
    amount: 100,
    createdAt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReduce(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
