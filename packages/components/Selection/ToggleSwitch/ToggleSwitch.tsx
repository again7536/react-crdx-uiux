interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'medium' | 'large';
}

const ToggleSwitch = ({ id, children, size = 'medium', className, ...props }: ToggleSwitchProps) => {
  return (
    <div className={`krds-form-toggle-switch ${size} ${className}`}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>
        <span className="switch-toggle">
          <i />
        </span>
        {children}
      </label>
    </div>
  );
};

export default ToggleSwitch;
export type { ToggleSwitchProps };
