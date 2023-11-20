import React from 'react';
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import Transactions from './Transactions'
import AddTransaction from './AddTransaction'
import TransactionProvider from '../contexts/transactions';

function ExpenseWrapper() {
    return (
        <div className='container mx-auto w-[400px] bg-slate-900'>
<TransactionProvider>
<Header/>
             <Balance/>
             <IncomeExpense/>
             <Transactions/>
             <AddTransaction/>
</TransactionProvider>
        </div>
    );
}

export default ExpenseWrapper;