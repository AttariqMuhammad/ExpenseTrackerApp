import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

import { getFormattedDate } from "../../utils/date";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Manage Expense", { id: id });
  }

  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.buttonContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>
            $ {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 6,
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    paddingBottom: 2,
    fontWeight: "bold",
  },
  amountContainer: {
    marginVertical: 6,
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 75,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
