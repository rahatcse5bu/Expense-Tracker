import {React,useContext} from 'react'
import Transaction from './Transaction'
import { TransactionContext } from '../contexts/transactions';

export default function Transactions() {
    const { transactions } = useContext(TransactionContext);
    // addTransactions((prev) => {return [...prev, {name:'Rahat', amount:234}]})
  return (
    <div>
        {transactions.map((transaction,index) =>(
            <Transaction key={index} transaction={transaction}/>
        ))}
      
    </div>
  )
}
