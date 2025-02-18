import { FlatList, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 12.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    description: "New TV",
    amount: 799.99,
    date: new Date(2021, 3, 12),
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e5",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
