export default (expenses) => {
  return expenses.map((exp) => exp.amount).reduce((map, acc) => map + acc, 0);
};
