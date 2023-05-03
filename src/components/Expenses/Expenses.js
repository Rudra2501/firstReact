import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = null;
  <p className="expenses-filter">No Expenses found for the selected year!</p>;

  if (filteredExpenses.length === 1) {
    expensesContent = [
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={Math.random().toString()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )),
      <p className="expenses-filter">
        Only single Expense here. Please add more...
      </p>,
    ];
  } else if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={Math.random().toString()}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
