import { View, Text, StyleSheet } from "react-native";

import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={periodName} />
      <ExpenseList expenses={expenses} />
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
