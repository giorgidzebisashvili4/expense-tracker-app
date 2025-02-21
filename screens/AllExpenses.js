import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expensesCtx.expenses}
      fallbackText="no registered expenses found"
    />
  );
}
