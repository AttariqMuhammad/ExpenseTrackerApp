import { View, Text, StyleSheet } from "react-native";

import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expenses, periodName, fallbackText }) {
  let content = <Text style={styles.content}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={periodName} />
      {content}
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
  content: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 32,
  },
});
