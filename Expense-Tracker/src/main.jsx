import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
import ExpenseWrapper from "./components/ExpenseWrapper";
import TransactionProvider from './contexts/transactions';

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <TransactionProvider>
    <ExpenseWrapper>
			<App></App>
		</ExpenseWrapper>
    </TransactionProvider>

	</React.StrictMode>
);