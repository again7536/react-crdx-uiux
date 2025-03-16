import { HeaderUtilityDropdownProps } from './HeaderUtility/HeaderUtilityDropdown';
import { MainMenuProps } from '@/components/Discover/MainMenu/MainMenu';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import { HeaderUtilityProps } from './HeaderUtility/HeaderUtility';
import HeaderAction, { HeaderActionProps } from './HeaderAction/HeaderAction';
import { useCallback } from 'react';
import MainMenuMobileRenderer, {
  MainMenuMobileProps,
} from '@/components/Discover/MainMenuMobile/MainMenuMobileRenderer';
import { useHeaderStore } from '@/hooks/store/Identity/Header/useHeaderStore';
import Backdrop from '@/components/Others/Backdrop/Backdrop';
import { useMainMenuStore } from '@/hooks/store/Discover/MainMenu/useMainMenuStore';

interface HeaderProps {
  utilities?: React.ReactElement<HeaderUtilityProps | HeaderUtilityDropdownProps>[];
  logoUrl?: string;
  logoScreenReaderText?: string;
  actions?: React.ReactElement<HeaderActionProps>[];
  children?: React.ReactElement<MainMenuProps | MainMenuMobileProps>;
}

const Header = ({
  utilities,
  logoUrl,
  logoScreenReaderText = 'KRDS - Korea Design System',
  actions,
  children,
}: HeaderProps) => {
  const { openedMainMenuId, toggleMainMenu } = useMainMenuStore();
  const { mainMenuMobile } = useHeaderStore();
  const handleOpenMainMenuMobile = useMainMenuMobileStore((store) => store.handleOpen);
  const isMobileMenuTransitionDone = useMainMenuMobileStore((store) => store.isTransitionDone);
  const isMobileMenuOpen = useMainMenuMobileStore((store) => store.isOpen);

  const handleBackdropClick = useCallback(() => {
    toggleMainMenu?.(null);
  }, [toggleMainMenu]);

  return (
    <header id="krds-header">
      <div className="header-in" inert={isMobileMenuTransitionDone && isMobileMenuOpen}>
        <div className="header-container">
          <div className="inner">
            <div className="header-utility">
              <ul className="utility-list">{utilities}</ul>
            </div>

            <div className="header-branding">
              <h2 className="logo" style={logoUrl ? { backgroundImage: `url(${logoUrl})` } : undefined}>
                <a href="#">
                  <span className="sr-only">{logoScreenReaderText}</span>
                </a>
              </h2>
              <div className="header-actions">
                {actions}
                <HeaderAction variant="all" aria-controls="mobile-nav" onClick={handleOpenMainMenuMobile}>
                  전체메뉴
                </HeaderAction>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
      {mainMenuMobile && <MainMenuMobileRenderer {...mainMenuMobile} />}
      <Backdrop isOpen={!!openedMainMenuId} onClick={handleBackdropClick} />
    </header>
  );
};

export default Header;
