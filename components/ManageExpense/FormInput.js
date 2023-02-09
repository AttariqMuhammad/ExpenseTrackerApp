import { findFocusedRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import InputField from "../UI/InputField";

function FormInput() {
  function amountChangeHandler() {}

  return (
    <View>
      <View style={styles.rows}>
        <InputField
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onchange: amountChangeHandler,
          }}
          style={styles.rowInput}
        />
        <InputField
          label="Date"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onchange: amountChangeHandler,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
          style={styles.rowInput}
        />
      </View>
      <View>
        <InputField
          label="Description"
          textInputConfig={{
            onchange: amountChangeHandler,
            multiline: true,
            autoCapitalize: "sentences",
          }}
        />
      </View>
    </View>
  );
}

export default FormInput;

const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
