import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpensesOverview() {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
        <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
      </BottomTabs.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
