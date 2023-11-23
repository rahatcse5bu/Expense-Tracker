/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext({
	transactions: [],
	// success: true,
});

const TransactionProvider = (props) => {
	const savedTransaction = JSON.parse(localStorage.getItem('transactions')) || [];
	// const savedTransaction =  [];
	// console.log('test'+JSON.stringify(localStorage.getItem('transactions')))
	const [transactions, addTransactions] = useState(savedTransaction.savedData);
	// console.log('9999'+JSON.parse(JSON.stringify(transactions.savedData)))
	// const [transactions, addTransactions] = useState([
	// 	// {
	// 	// 	name: "biscuits",
    //     //     amount :234.23
	// 	// },
	// 	// {
	// 	// 	name: "tea",
    //     //     amount :2.123
	// 	// },
	// ]);
useEffect(()=>{
localStorage.setItem('transactions',JSON.stringify({'savedData':transactions}))
},[transactions]);

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