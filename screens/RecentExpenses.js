import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";

import { View, Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
    }
    getExpenses();
  }, [expensesCtx]);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText="no recent expenses found"
    />
  );
}
