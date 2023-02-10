import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import InputField from "../UI/InputField";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";

function FormInput({ onCancel, submitLabel, onSubmit, defaultValue }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : "",
    date: defaultValue ? getFormattedDate(defaultValue.date) : "",
    description: defaultValue ? defaultValue.description : "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputvalues) => {
      return {
        ...curInputvalues,
        [inputIdentifier]: enteredValue,
      };
    });
    console.log(inputValues);
  }

  //add expense functio
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  }

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rows}>
        <InputField
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <InputField
          label="Date"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <View>
        <InputField
          label="Description"
          textInputConfig={{
            multiline: true,
            autoCapitalize: "sentences",
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitLabel}
        </Button>
      </View>
    </View>
  );
}

export default FormInput;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
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
});
