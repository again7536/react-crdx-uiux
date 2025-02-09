interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  size?: 'small' | 'medium' | 'large';
  isError?: boolean;
  isComplete?: boolean;
}

const Select = ({
  children,
  label,
  hint,
  id,
  className,
  size = 'medium',
  isError = false,
  isComplete = false,
  ...props
}: SelectProps) => {
  return (
    <div className="form-group">
      {label && (
        <div className="form-tit">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="form-conts">
        <select
          id={id}
          className={`krds-form-select ${className} ${size} ${
            isError ? 'is-error' : ''
          } ${isComplete ? 'completed' : ''}`}
          {...props}
        >
          {children}
        </select>
      </div>
      {hint && <p className={`${isError ? 'form-hint-invalid' : 'form-hint'}`}>{hint}</p>}
    </div>
  );
};

export default Select;
