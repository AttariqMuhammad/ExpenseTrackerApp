import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expenses-context";

function RecentExpense() {
  const { expenses } = useContext(ExpenseContext);

  return <ExpenseOutput expenses={expenses} periodName={"Last 7 days"} />;
}

export default RecentExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
