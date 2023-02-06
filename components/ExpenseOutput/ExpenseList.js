import { View, Text, StyleSheet, FlatList } from "react-native";

function renderExpenseItem({ item }) {
  return (
    <View>
      <Text>{item.description}</Text>
    </View>
  );
}

function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpenseList;

const styles = StyleSheet.create({});
