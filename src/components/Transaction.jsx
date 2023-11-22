// import React  from 'react';

// eslint-disable-next-line react/prop-types
export default function Transaction({transaction}) {
const color = Number(transaction.amount)>=0? 'rightGreenBorder' : 'rightRedBorder';
const sign = Number(transaction.amount)<0? '-' : '';
// const colorClass=`border-${color}-700`;

// console.log(colorClass);
  return (
// Using the Grid System with className
<div className='transaction-item  border-b mb-2'>
<div className={`grid grid-cols-2 gap-20 bg-blue-950 justify-between items-center text-white border-r-4 ${color} px-4 py-2`}>
  <div className="col-span-1"> {transaction.name}
  </div>
  <div className="col-span-1"> {sign}${Math.abs(transaction.amount)}
  </div>
</div>
</div>

  )
}
