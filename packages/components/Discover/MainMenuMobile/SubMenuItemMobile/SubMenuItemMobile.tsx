import { Depth3MenuItemMobileProps } from '../Depth3MenuItemMobile/Depth3MenuItemMobile';

interface SubMenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children?: React.ReactElement<Depth3MenuItemMobileProps>[] | React.ReactElement<Depth3MenuItemMobileProps>;
}

const SubMenuItemMobile = ({ title, children, className, ...props }: SubMenuItemMobileProps) => {
  const hasDepth3 = (Array.isArray(children) && children.length > 0) || (!Array.isArray(children) && children);

  return (
    <li>
      <a {...props} className={`gnb-sub-trigger ${hasDepth3 ? 'has-depth3' : ''} ${className}`}>
        {title}
      </a>
      <div className="depth3-wrap">
        <ul>{children}</ul>
      </div>
    </li>
  );
};

export default SubMenuItemMobile;
export type { SubMenuItemMobileProps };
