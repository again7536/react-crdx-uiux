import React from 'react';
import { Depth3MenuItemMobileProps } from '../Depth3MenuItemMobile/Depth3MenuItemMobile';
import { useCallback, useState } from 'react';
interface SubMenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children?: React.ReactElement<Depth3MenuItemMobileProps>[] | React.ReactElement<Depth3MenuItemMobileProps>;
}

const SubMenuItemMobile = ({ title, children, className, ...props }: SubMenuItemMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasDepth3 = (Array.isArray(children) && children.length > 0) || (!Array.isArray(children) && children);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      setIsOpen(!isOpen);
      props.onClick?.(event);
    },
    [isOpen, props.onClick],
  );

  return (
    <li>
      <a
        {...props}
        className={`gnb-sub-trigger ${hasDepth3 ? 'has-depth3' : ''} ${isOpen ? 'active' : ''} ${className}`}
        onClick={handleClick}
      >
        {title}
      </a>
      <div className={`depth3-wrap ${isOpen ? 'is-open' : ''}`}>
        <ul>{children}</ul>
      </div>
    </li>
  );
};

export default React.memo(SubMenuItemMobile);
export type { SubMenuItemMobileProps };
