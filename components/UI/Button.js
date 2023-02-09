import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ onPress, children, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    minWidth: 100,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
  },
  flatText: {
    color: GlobalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary200,
    borderRadius: 6,
  },
});
