interface Depth4MenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

const Depth4MenuItemMobile = ({ children, ...props }: Depth4MenuItemMobileProps) => {
  return (
    <li>
      <a {...props}>{children}</a>
    </li>
  );
};

export default Depth4MenuItemMobile;
export type { Depth4MenuItemMobileProps };
