type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label: string;
  description?: string;
  type?: "chip" | "check";
  size?: "medium" | "large";
};

const Checkbox = ({
  label,
  id,
  description,
  size = "medium",
  type = "check",
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div className={`krds-form-${type} ${size} ${className}`}>
      <input type='checkbox' id={id} {...props} />
      <label
        className={type === "chip" ? "krds-form-chip-outline" : ""}
        htmlFor={id}
      >
        {label}
      </label>
      {description && (
        <div className='krds-form-check-cnt'>
          <p className='krds-form-check-p'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
export { CheckboxProps };
