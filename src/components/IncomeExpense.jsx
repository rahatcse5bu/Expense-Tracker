import  {useEffect,useState,useContext} from 'react';
import {TransactionContext} from '../contexts/transactions'
function IncomeExpense() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const { transactions } = useContext(TransactionContext);

    // Effect to update income and expenses when transactions change
    useEffect(() => {
      // Calculate total income and total expenses using reduce
      const { totalIncome, totalExpense } = transactions.reduce(
        (acc, transaction) => {
          if (transaction.amount > 0) {
            acc.totalIncome += transaction.amount;
          } else {
            acc.totalExpense += Math.abs(transaction.amount);
          }
          return acc;
        },
        {
          totalIncome: 0,
          totalExpense: 0,
        }
      );
    
      // Update the state
      setTotalIncome(totalIncome);
      setTotalExpense(totalExpense);
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transactions]);
    
    return (
<div className="grid grid-cols-2 gap-2 justify-between items-center px-4 mb-4">
  <div className="col-span-1 text-white"> 
  <h4>INCOME:</h4>
  <p className='text-green-700'>+${Number(totalIncome).toFixed(2)}</p>
  </div>
  <div className="col-span-1 text-white"> 
  <h4>EXPENSES:</h4>
  <p className='text-red-700'>-${Number(totalExpense).toFixed(2)}</p>
  </div>
</div>

    );
}

export default IncomeExpense;