import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "New Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View>
      <Text>{editedExpenseId}</Text>
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      <View style={styles.trashContainer}>
        {isEditing && (
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={40}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 6,
  },
  trashContainer: {
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary50,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8,
  },
});
