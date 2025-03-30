import Icon from '@/components/Others/Icon/Icon';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  size?: 'small' | 'medium' | 'large';
  underline?: boolean;
  disabled?: boolean;
  basic?: boolean;
  icon?: 'go' | 'angle right';
  colored?: boolean;
}

const Link = ({
  children,
  href,
  className,
  size = 'medium',
  underline = false,
  disabled = false,
  basic = false,
  icon = 'go',
  colored = true,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      href={href}
      className={`krds-btn ${size} ${colored ? 'link' : 'text'} ${basic ? 'basic' : ''} ${disabled ? 'disabled' : ''} ${className}`}
    >
      <span className={underline ? 'underline' : ''}>{children}</span>
      {icon && <Icon name={icon} />}
    </a>
  );
};

export default Link;
export type { LinkProps };
