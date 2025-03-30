import { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobile';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobile';
import { HeaderUtilityProps } from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import { LinkProps } from '@/components/Action/Link/Link';
import { useHeaderStore } from '@/hooks/store/Identity/Header/useHeaderStore';
import React, { useEffect } from 'react';
import { ServiceMenuMobileProps } from './ServiceMenuMobile/ServiceMenuMobile';

type MainMenuMobileChild = React.ReactElement<MainMenuItemMobileProps> | React.ReactElement<SubMenuGroupMobileProps>;

interface MainMenuMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: MainMenuMobileChild[] | MainMenuMobileChild;
  utilities?: React.ReactElement<HeaderUtilityProps>[];
  bottomLinks?: React.ReactElement<LinkProps>[];
  serviceMenus?: React.ReactElement<ServiceMenuMobileProps>[];
  type?: 'type1' | 'type2';
}

const MainMenuMobile = ({
  children,
  utilities,
  bottomLinks,
  serviceMenus,
  type = 'type1',
  ...props
}: MainMenuMobileProps) => {
  const { addMainMenuMobile, removeMainMenuMobile } = useHeaderStore();

  useEffect(() => {
    addMainMenuMobile({
      utilities,
      bottomLinks,
      serviceMenus,
      type,
      ...props,
    });

    return () => {
      removeMainMenuMobile();
    };
  }, [utilities, bottomLinks, serviceMenus, addMainMenuMobile, JSON.stringify(props)]);

  return children;
};

export default React.memo(MainMenuMobile);
export type { MainMenuMobileProps };
