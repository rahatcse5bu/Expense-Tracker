import {useContext, useEffect, useState} from 'react';
import { TransactionContext } from '../contexts/transactions';

function calculateTotal(transactions)  {
return Number(transactions.reduce((output, iteration) => output + Number(iteration.amount),0)).toFixed(2)
}
function Balance() {

    const { transactions } = useContext(TransactionContext);
    const [total, setTotal] = useState(0);
    const [sign,setSign]=useState('');
    console.log("transaction=> "+transactions)
    useEffect(() => {
     // Code to run on initial mount
  console.log('Component is initially mounted');

  // Log the current transactions
  console.log('Current Transactions:', transactions);

  // Code to run whenever transactions change
  // setTotal(prevTotal => transactions.reduce((output, iteration) => output + Number(iteration.amount), prevTotal));
  setTotal(calculateTotal(transactions));
  setSign( total<0? '-':'');
  // Cleanup function (optional)
  // return () => {
  //   console.log('Component is unmounted');
  // };
    }, [transactions]);
      
   
 
    return (
        <div>
            <h3 className='text-white text-center text-2xl mb-2 pb-2'>Your Balance:</h3>
            <p className='text-white text-center text-2xl mb-4 pb-4'>{sign}${Math.abs(Number(total).toFixed(2))}</p>
        </div>
    );
}

export default Balance;