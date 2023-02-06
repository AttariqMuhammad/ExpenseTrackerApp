import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodName}</Text>
      <Text style={styles.text}>$ {expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 24,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
