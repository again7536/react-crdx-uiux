import Icon, { IconTypes } from '@/components/Others/Icon/Icon';

type ButtonColor = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type ButtonVariant = 'normal' | 'text' | 'icon' | 'icon-border';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: IconTypes;
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
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`krds-btn ${color} ${size} ${variant.split('-').join(' ')} ${icon ? 'icon' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {variant === 'icon' && <span className="sr-only">{screenReaderTextForIcon}</span>}
      {children}
      {icon && <Icon name={icon} />}
    </button>
  );
};

export default Button;
