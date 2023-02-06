import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

function RecentExpense() {
  return <ExpenseOutput periodName={"Last 7 days"} />;
}

export default RecentExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
