import { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobile';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobile';
import { HeaderUtilityProps } from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import { LinkProps } from '@/components/Action/Link/Link';
import { useHeaderStore } from '@/hooks/store/Identity/Header/useHeaderStore';
import { useEffect } from 'react';
type MainMenuMobileChild = React.ReactElement<MainMenuItemMobileProps> | React.ReactElement<SubMenuGroupMobileProps>;

interface MainMenuMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: MainMenuMobileChild[] | MainMenuMobileChild;
  utilities?: React.ReactElement<HeaderUtilityProps>[];
  bottomLinks?: React.ReactElement<LinkProps>[];
}

const MainMenuMobile = ({ children, utilities, bottomLinks, ...props }: MainMenuMobileProps) => {
  const { addMainMenuMobile, removeMainMenuMobile } = useHeaderStore();

  useEffect(() => {
    addMainMenuMobile({
      children,
      utilities,
      bottomLinks,
      ...props,
    });
  }, [children, utilities, bottomLinks, addMainMenuMobile, ...Object.values(props)]);

  useEffect(() => {
    return () => {
      removeMainMenuMobile();
    };
  }, [removeMainMenuMobile]);

  return null;
};

export default MainMenuMobile;
export type { MainMenuMobileProps };
