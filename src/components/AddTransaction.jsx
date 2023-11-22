import React, { useState,useContext } from 'react'
import {TransactionContext} from '../contexts/transactions'
export default function AddTransaction() {
    const  {addTransactions}  = useContext(TransactionContext);

    const [name,setName]= useState('');
    const [amount,setAmonut]= useState(0);
    const handleAddTransaction = (e) => {
        e.preventDefault();
        addTransactions((prev)=>{ return [...prev,{'name':name,'amount':Number(amount)}]})
    }
  return (
    <div className='add-transaction  flex flex-col items-center justify-center'>
      <h4 className='text-white py-3'>Add New Transaction</h4>
      <label className='block pb-2 text-white'>Name</label>
      <input value={name} className='rounded-md px-2 py-2' type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Item' required></input>
<label className='block py-2 text-white'>Amount</label>
<input value={amount} className='rounded-md px-2 py-2' type='number' onChange={(e)=>{setAmonut(e.target.value)}} placeholder='0'/>
<button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded my-5" onClick={handleAddTransaction}>
     Add Transaction
    </button>
    </div>
  )
}
