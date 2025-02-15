interface MainMenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

const MainMenuItemMobile = ({ children, className, ...props }: MainMenuItemMobileProps) => {
  return (
    <li>
      <a {...props} className={`gnb-main-trigger ${className}`}>
        {children}
      </a>
    </li>
  );
};

export default MainMenuItemMobile;
export type { MainMenuItemMobileProps };
