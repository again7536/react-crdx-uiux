/*
  RadioList component is not included in original KRDS, but added for consistency.
*/

import React from 'react';
import { RadioProps } from './Radio';

interface RadioListProps {
  children: React.ReactElement<RadioProps>[];
  isColumnal?: boolean;
}

const RadioList = ({ children, isColumnal = false }: RadioListProps) => {
  return (
    <div className="form-group">
      <div className="form-conts">
        <div className={`krds-check-area ${isColumnal ? 'chk-column' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default RadioList;
