/*
  CheckboxList component is not included in original KRDS, but added for consistency.
*/

import React from 'react';
import { CheckboxProps } from './Checkbox';

interface CheckboxGroupProps {
  children: React.ReactElement<CheckboxProps>[];
  isColumnal?: boolean;
}

const CheckboxGroup = ({ children, isColumnal = false }: CheckboxGroupProps) => {
  return (
    <div className="form-group">
      <div className="form-conts">
        <div className={`krds-check-area ${isColumnal ? 'chk-column' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
