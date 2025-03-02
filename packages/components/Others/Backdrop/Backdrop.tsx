import { createPortal } from 'react-dom';

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const Backdrop = ({ className, isOpen, ...props }: BackdropProps) => {
  return createPortal(
    <div {...props} className={`gnb-backdrop ${isOpen ? 'active is-gnb-web' : ''} ${className}`} />,
    document.body,
  );
};

export default Backdrop;
export type { BackdropProps };
