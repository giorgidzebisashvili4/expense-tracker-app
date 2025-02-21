import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 12.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    description: "New TV",
    amount: 799.99,
    date: new Date(2021, 3, 12),
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e5",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
  {
    id: "e6",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
  {
    id: "e7",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
  {
    id: "e8",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },

  {
    id: "e9",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
  {
    id: "e10",
    description: "new phone",
    amount: 990,
    date: new Date(2022, 15, 1),
  },
  {
    id: "e11",
    description: "new phone",
    amount: 990,
    date: new Date(2025, 20, 2),
  },
];

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "UPDATE":
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = action.payload.data;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export { ExpensesContext, ExpensesProvider };

export default ExpensesContext;
