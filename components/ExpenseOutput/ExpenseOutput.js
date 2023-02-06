import { View, Text, StyleSheet } from "react-native";

import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_DATA = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trouser",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some Bananas",
    amount: 5.99,
    date: new Date("2023-02-05"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 12.99,
    date: new Date("2023-02-01"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 11.99,
    date: new Date("2023-01-29"),
  },
];

function ExpenseOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_DATA} periodName={periodName} />
      <ExpenseList expenses={DUMMY_DATA} />
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
