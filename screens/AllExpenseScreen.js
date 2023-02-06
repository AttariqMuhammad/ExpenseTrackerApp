import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

function AllExpense() {
  return <ExpenseOutput periodName={"All Time"} />;
}

export default AllExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
