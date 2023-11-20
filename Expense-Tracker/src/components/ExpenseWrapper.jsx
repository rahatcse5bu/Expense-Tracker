import {useContext} from 'react';
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import Transactions from './Transactions'
import AddTransaction from './AddTransaction'
import {TransactionContext} from '../contexts/transactions';

function ExpenseWrapper() {
    const { transactions } = useContext(TransactionContext);

    return (
        <div className='container mx-auto w-[400px] bg-slate-900 rounded-md px-2'>

<Header/>
             <Balance/>
             <IncomeExpense transactions={transactions}/>
             <Transactions/>
             <AddTransaction/>

        </div>
    );
}

export default ExpenseWrapper;