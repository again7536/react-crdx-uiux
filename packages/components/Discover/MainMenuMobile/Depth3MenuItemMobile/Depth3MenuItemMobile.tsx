import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';

interface Depth3MenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children?: React.ReactElement<Depth3MenuItemMobileProps>[] | React.ReactElement<Depth3MenuItemMobileProps>;
}

const Depth3MenuItemMobile = ({ title, children, className, ...props }: Depth3MenuItemMobileProps) => {
  const hasDepth4 = (Array.isArray(children) && children.length > 0) || (!Array.isArray(children) && children);

  return (
    <li>
      <a {...props} className={`depth3-trigger ${hasDepth4 ? 'has-depth4' : ''} ${className}`}>
        {title}
      </a>
      {hasDepth4 && (
        <div className="depth4-wrap">
          <div className="depth4-head">
            <Button screenReaderTextForIcon="이전화면">
              <Icon name="angle left" />
            </Button>
            <Button screenReaderTextForIcon="전체메뉴 닫기">
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
