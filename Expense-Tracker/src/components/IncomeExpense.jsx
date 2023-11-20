import React from 'react';

function IncomeExpense() {
    return (
<div className="grid grid-cols-2 gap-2 justify-between items-center px-4 mb-4">
  <div className="col-span-1 text-white"> 
  <h4>INCOME:</h4>
  <p className='text-green-700'>+$0.2313</p>
  </div>
  <div className="col-span-1 text-white"> 
  <h4>EXPENSES:</h4>
  <p className='text-red-700'>-$10.2313</p>
  </div>
</div>

    );
}

export default IncomeExpense;