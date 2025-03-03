import { TextareaHTMLAttributes, useState } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = ({ id, className, label, maxLength, ...props }: TextareaProps) => {
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const length = e.target.value.length;
    setCount(length);
    props.onChange?.(e);
  };

  return (
    <div className="form-group">
      <div className="form-tit">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="form-conts">
        <div className="textarea-wrap">
          <textarea
            {...props}
            className={`krds-input ${className}`}
            id={id}
            onChange={handleChange}
            maxLength={maxLength}
          />
          {maxLength && (
            <p className="textarea-count">
              <span className="count-now">{count}</span>
              <span className="count-total">{`/${maxLength}`}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Textarea;
