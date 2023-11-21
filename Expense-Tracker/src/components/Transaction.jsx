// import React  from 'react';

// eslint-disable-next-line react/prop-types
export default function Transaction({transaction}) {
const color = transaction.amount>=0? 'green' : 'red';
const sign = transaction.amount>=0? '+' : '-';
  return (
// Using the Grid System with className
<div className='transaction-item border-b'>
<div className={`grid grid-cols-2 gap-20 bg-blue-950 justify-between items-center text-white border-r-4 border-${color}-600 px-4 py-2`}>
  <div className="col-span-1"> {transaction.name}
  </div>
  <div className="col-span-1"> {sign}${Math.abs(transaction.amount)}
  </div>
</div>
</div>

  )
}
