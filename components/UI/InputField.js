import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function InputField({ label, style, textInputConfig, invalid }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.inputInvalid);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  container: { margin: 8 },
  label: { color: "white", marginBottom: 6 },
  input: {
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  labelInvalid: {},
  inputInvalid: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.error500,
    backgroundColor: GlobalStyles.colors.error50,
  },
});
