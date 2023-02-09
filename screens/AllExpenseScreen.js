import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expenses-context";

function AllExpense() {
  const { expenses } = useContext(ExpenseContext);

  return <ExpenseOutput expenses={expenses} periodName={"All Time"} />;
}

export default AllExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
