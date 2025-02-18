import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

export default function AllExpenses() {
  return <ExpensesOutput expensesPeriod={"Total"} expenses={[]} />;
}
