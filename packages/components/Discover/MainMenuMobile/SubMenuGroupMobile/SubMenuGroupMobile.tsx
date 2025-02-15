import { SubMenuItemMobileProps } from '../SubMenuItemMobile/SubMenuItemMobile';

interface SubMenuGroupMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactElement<SubMenuItemMobileProps>[];
}

const SubMenuGroupMobile = ({ title, children, className, ...props }: SubMenuGroupMobileProps) => {
  return (
    <div {...props} className={`gnb-sub-list ${className}`}>
      <h2 className="sub-title">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default SubMenuGroupMobile;
export type { SubMenuGroupMobileProps };
