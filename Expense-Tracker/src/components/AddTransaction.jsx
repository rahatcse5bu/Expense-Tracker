import React, { useState,useContext } from 'react'
import TransactionContext from '../contexts/transactions'
export default function AddTransaction(props) {
    const  addTransactions  = useContext(TransactionContext);

    const [name,setName]= useState('');
    const [amount,setAmonut]= useState(0);
    const handleAddTransaction = (e) => {
        e.preventDefault();
        props.addTransactions((prev)=>{ return [...prev,{'name':name,'amount':amount}]})
    }
  return (
    <div className='add-transaction'>
      <h4>Add New transaction</h4>
      <label>Name</label>
      <input type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter text'></input>
<label>Amount</label>
<input type='number' onChange={(e)=>{setAmonut(e.target.value)}} placeholder='0'/>
<button onClick={handleAddTransaction} className='text-white text-center px-4 py-2' >Add Transaction</button>
    </div>
  )
}
