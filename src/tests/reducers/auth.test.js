import authReducer from "../../reducers/auth";

test("should test login", () => {
  const action = {
    type: "LOGIN",
    uid: 123,
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should test login", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
