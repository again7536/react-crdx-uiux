import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useState } from 'react';
interface Depth3MenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children?: React.ReactElement<Depth3MenuItemMobileProps>[] | React.ReactElement<Depth3MenuItemMobileProps>;
}

const Depth3MenuItemMobile = ({ title, children, className, ...props }: Depth3MenuItemMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDepth4 = (Array.isArray(children) && children.length > 0) || (!Array.isArray(children) && children);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      setIsOpen(!isOpen);
      props.onClick?.(event);
    },
    [isOpen, props.onClick],
  );
  const handleGoBack = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <li>
      <a {...props} className={`depth3-trigger ${hasDepth4 ? 'has-depth4' : ''} ${className}`} onClick={handleClick}>
        {title}
      </a>
      {hasDepth4 && (
        <div className={`depth4-wrap ${isOpen ? 'is-open' : ''}`}>
          <div className="depth4-head">
            <Button variant="icon" color="none" screenReaderTextForIcon="이전화면" onClick={handleGoBack}>
              <Icon name="angle left" />
            </Button>
            <Button variant="icon" color="none" screenReaderTextForIcon="전체메뉴 닫기">
              <Icon name="popup-close" />
            </Button>
          </div>
          <ul className="depth4-body">
            <h4 className="sub-title">{title}</h4>
            <ul className="depth4-ul">{children}</ul>
          </ul>
        </div>
      )}
    </li>
  );
};

export default Depth3MenuItemMobile;
export type { Depth3MenuItemMobileProps };
