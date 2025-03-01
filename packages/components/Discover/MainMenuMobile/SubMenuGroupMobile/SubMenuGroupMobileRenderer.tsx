import { SubMenuGroupMobileProps } from './SubMenuGroupMobile';

const SubMenuGroupMobileRenderer = ({ title, children, className, ...props }: SubMenuGroupMobileProps) => {
  return (
    <div {...props} className={`gnb-sub-list ${className}`}>
      <h2 className="sub-title">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default SubMenuGroupMobileRenderer;
export type { SubMenuGroupMobileProps };
