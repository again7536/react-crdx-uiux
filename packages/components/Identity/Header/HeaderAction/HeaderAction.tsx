import { ButtonHTMLAttributes } from 'react';

type HeaderButtonVariant = 'login' | 'join' | 'myGov' | 'search' | 'all';

interface HeaderActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: HeaderButtonVariant;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const HEADER_BUTTON_VARIANT_CLASS: Record<HeaderButtonVariant, string> = {
  login: 'login',
  join: 'join',
  myGov: 'my',
  search: 'sch',
  all: 'all',
};

const HeaderActionButton = ({ children, variant = 'login', title, onClick, ...props }: HeaderActionProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`btn-navi ${HEADER_BUTTON_VARIANT_CLASS[variant]}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HeaderActionButton;
export type { HeaderActionProps };
