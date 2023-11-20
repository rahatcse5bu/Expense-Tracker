/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TransactionContext = createContext({
	transactions: [],
	success: true,
});

const TransactionProvider = (props) => {
	const [transactions, addTransactions] = useState([
		{
			name: "biscuits",
            amount :234.23
		},
		{
			name: "tea",
            amount :2.123
		},
	]);

	// const [success, setSuccess] = useState(true);

	const value = {
		transactions,
		addTransactions,
		// success,
		// setSuccess,
	};

	return (
		<TransactionContext.Provider value={value}>
			{props.children}
		</TransactionContext.Provider>
	);
};

export default TransactionProvider;