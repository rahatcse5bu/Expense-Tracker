import {React } from 'react';


// eslint-disable-next-line react/prop-types
export default function Transaction({transaction}) {
//  console.log(transactions[0].name);
  return (
// Using the Grid System with className
<div className='transaction-item border-b'>
<div className="grid grid-cols-2 gap-64 bg-blue-950 justify-between items-center text-white border-r-4 border-red-600 px-4 py-2">
  <div className="col-span-1"> {transaction.name}
  </div>
  <div className="col-span-1"> ${transaction.amount}
  </div>
</div>
</div>

  )
}
