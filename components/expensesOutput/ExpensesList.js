import { FlatList } from "react-native";

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} keyExtractor={(item) => item.id} />;
}

export default ExpensesList;
