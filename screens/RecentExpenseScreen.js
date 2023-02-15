import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../utils/https";

function RecentExpense() {
  //loading useState
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState();

  //context
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpense() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expenseCtx.setExpense(expenses);
      } catch (error) {
        setIsError("Could not fetch expense!");
      }
      setIsFetching(false);
    }

    getExpense();
  }, []);

  function isErrorHandler() {
    setIsError(null);
  }

  if (isError && !isFetching) {
    return <ErrorOverlay message={isError} onConfirm={isErrorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
