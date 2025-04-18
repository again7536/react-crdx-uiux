import { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobile';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobile';
import { HeaderUtilityProps } from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import { LinkProps } from '@/components/Action/Link/Link';
import { useHeaderStore } from '@/hooks/store/Identity/Header/useHeaderStore';
import React, { useEffect } from 'react';
import { ServiceMenuMobileProps } from './ServiceMenuMobile/ServiceMenuMobile';
import Logger from '@/utils/Logger';

type MainMenuMobileChild = React.ReactElement<MainMenuItemMobileProps> | React.ReactElement<SubMenuGroupMobileProps>;

interface MainMenuMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: MainMenuMobileChild[] | MainMenuMobileChild;
  utilities?: React.ReactElement<HeaderUtilityProps>[];
  bottomLinks?: React.ReactElement<LinkProps>[];
  serviceMenus?: React.ReactElement<ServiceMenuMobileProps>[];
  menuLinks?: {
    href: string;
    label: string;
  }[];
  type?: 'type1' | 'type2';
}

const MainMenuMobile = ({
  children,
  utilities,
  bottomLinks,
  serviceMenus,
  menuLinks,
  type = 'type1',
  ...props
}: MainMenuMobileProps) => {
  const { addMainMenuMobile, removeMainMenuMobile } = useHeaderStore();

  useEffect(() => {
    if (type === 'type1' && menuLinks) {
      Logger.warn('MenuLinks props are supported only in type2.');
    }

    addMainMenuMobile({
      utilities,
      bottomLinks,
      serviceMenus,
      menuLinks,
      type,
      ...props,
    });

    return () => {
      removeMainMenuMobile();
    };
  }, [
    utilities,
    bottomLinks,
    serviceMenus,
    menuLinks,
    addMainMenuMobile,
    type,
    removeMainMenuMobile,
    JSON.stringify(props),
  ]);

  return children;
};

export default React.memo(MainMenuMobile);
export type { MainMenuMobileProps };
