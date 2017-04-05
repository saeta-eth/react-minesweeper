import React from 'react';

const Checkbox = ({ row, col, block, handleClick, handleFlag }) => (
  <div className="checkbox-mw">
    {`${row}, ${col}`}
  </div>
);

export default Checkbox;