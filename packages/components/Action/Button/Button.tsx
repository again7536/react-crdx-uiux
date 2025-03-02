type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'none';
type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type ButtonVariant = 'normal' | 'text' | 'icon' | 'icon-border';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  variant?: ButtonVariant;
  screenReaderTextForIcon?: string;
}

const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  variant = 'normal',
  className,
  screenReaderTextForIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`krds-btn ${color} ${size} ${variant.split('-').join(' ')} ${variant === 'icon' ? 'icon' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {variant === 'icon' && <span className="sr-only">{screenReaderTextForIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
