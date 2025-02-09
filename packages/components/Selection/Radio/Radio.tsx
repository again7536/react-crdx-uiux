interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  description?: string;
  type?: 'chip' | 'check';
  size?: 'medium' | 'large';
}

const Radio = ({ label, id, description, size = 'medium', type = 'check', className, ...props }: RadioProps) => {
  return (
    <div className={`krds-form-${type} ${size} ${className}`}>
      <input type="radio" id={id} {...props} />
      <label className={type === 'chip' ? 'krds-form-chip-outline' : ''} htmlFor={id}>
        {label}
      </label>
      {type !== 'chip' && description && (
        <div className="krds-form-check-cnt">
          <p className="krds-form-check-p">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Radio;
export { RadioProps };
