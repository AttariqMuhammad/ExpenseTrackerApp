import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import AllExpense from "./screens/AllExpenseScreen";
import RecentExpense from "./screens/RecentExpenseScreen";
import ManageExpense from "./screens/ManageExpenseScreen";

import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./constants/styles";

//context
import ExpenseContextProvider from "./store/expenses-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ExpenseOverview() {
    return (
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={tintColor}
              size={24}
              onPress={() => navigation.navigate("ManageExpense")}
            />
          ),
        })}
      >
        <Tab.Screen
          name="Recent"
          component={RecentExpense}
          options={{
            title: "Recent Expense",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AllExpense"
          component={AllExpense}
          options={{
            title: "All Expense",
            tabBarLabel: "All",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
            }}
          >
            <Stack.Screen
              name="Overview"
              component={ExpenseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
