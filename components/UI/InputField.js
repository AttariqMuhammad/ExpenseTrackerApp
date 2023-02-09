import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function InputField({ label, style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
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
});
