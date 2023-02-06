import { View, Text, StyleSheet, FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem({ item }) {
  return <ExpenseItem {...item} />;
}

function ExpenseList({ expenses }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
}

export default ExpenseList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
