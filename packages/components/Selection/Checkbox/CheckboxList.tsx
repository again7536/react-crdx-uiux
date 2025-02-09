/*
  CheckboxList component is not included in original KRDS, but added for consistency.
*/

import React from 'react';
import { CheckboxProps } from './Checkbox';

interface CheckboxListProps {
  children: React.ReactElement<CheckboxProps>[];
  isColumnal?: boolean;
}

const CheckboxList = ({ children, isColumnal = false }: CheckboxListProps) => {
  return (
    <div className="form-group">
      <div className="form-conts">
        <div className={`krds-check-area ${isColumnal ? 'chk-column' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default CheckboxList;
