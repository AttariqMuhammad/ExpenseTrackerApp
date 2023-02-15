import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expenses-context";

import FormInput from "../components/ManageExpense/FormInput";
import { deleteExpense, storeExpense, updateExpense } from "../utils/https";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpense({ route, navigation }) {
  //Laoding useState
  const [isFetching, setIsFetching] = useState(false);

  //getting id fomr route
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  //context
  const expenseCtx = useContext(ExpenseContext);

  const expenseValue = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "New Expense",
    });
  }, [navigation, isEditing]);

  //delete expense
  async function deleteExpenseHandler() {
    setIsFetching(true);
    await deleteExpense(editedExpenseId);
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  //add or update expense function
  async function confirmHandler(expenseData) {
    if (isEditing) {
      setIsFetching(true);
      await updateExpense(editedExpenseId, expenseData);
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      setIsFetching(true);
      const id = await storeExpense(expenseData);
      expenseCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <FormInput
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          submitLabel={isEditing ? "Update" : "Add"}
          defaultValue={expenseValue}
        />
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
  rootContainer: { margin: 24 },
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
