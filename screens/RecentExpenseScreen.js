import { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/https";

function RecentExpense() {
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpense();
      expenseCtx.setExpense(expenses);
    }

    getExpense();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      periodName={"Last 7 days"}
      fallbackText="No Expense Registered for the last 7 days"
    />
  );
}

export default RecentExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
