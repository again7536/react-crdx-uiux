import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import { MainMenuMobileProps } from './MainMenuMobile';
import SubMenuGroupMobileRenderer from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useFocusTrap from '@/hooks/useFocusTrap';
import useWindowSize from '@/hooks/useWindowSize';
import TextInput from '@/components/Input/TextInput/TextInput';
import classNames from 'classnames';
import MainMenuItemMobileRenderer from './MainMenuItemMobile/MainMenuItemMobileRenderer';

const MainMenuMobileRendererType2 = ({
  utilities,
  bottomLinks,
  className,
  menuLinks,
  ...props
}: Omit<MainMenuMobileProps, 'children' | 'serviceMenus'>) => {
  const { mainMenuItems, subMenuGroups, isOpen, handleClose, handleTransitionDone, setSearchValue } =
    useMainMenuMobileStore();
  const menuWrapObserverRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavTransitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavTransition, setIsNavTransition] = useState(false);
  const [localSearchValue, setLocalSearchValue] = useState('');
  const windowSize = useWindowSize();

  const handleBlankClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.gnb-wrap')) {
      target.querySelector<HTMLDivElement>('.gnb-wrap')?.focus();
    }
  };

  const handleSearch = () => {
    setSearchValue(localSearchValue);
  };

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!isOpen) return;
      if (tabNavTransitionTimerRef.current) {
        clearTimeout(tabNavTransitionTimerRef.current);
      }

      if (entries[0]?.isIntersecting) {
        setIsNavOpen(false);
        tabNavTransitionTimerRef.current = setTimeout(() => {
          setIsNavTransition(false);
        }, 600);
      } else {
        setIsNavOpen(true);
        setIsNavTransition(true);
      }
    },
    [isOpen],
  );

  useIntersectionObserver(menuWrapObserverRef.current!, handleIntersect);

  useEffect(() => {
    if (windowSize === 'pc') {
      handleClose();
    }
  }, [handleClose, windowSize]);

  useFocusTrap(mobileNavRef.current!);

  return (
    <nav
      {...props}
      id="mobile-nav"
      className={classNames('krds-main-menu-mobile', { 'is-open is-backdrop': isOpen }, className)}
      onClick={handleBlankClick}
      onTransitionEnd={handleTransitionDone}
      ref={mobileNavRef}
    >
      <div className={`gnb-wrap type-header-tab ${isNavTransition ? 'is-active' : ''}`} tabIndex={0}>
        <div className="gnb-header">
          <div className="gnb-utils">
            <ul className="utility-list">{utilities}</ul>
          </div>

          <div className="gnb-login">
            <Button type="button" className="large text">
              <Icon name="log" /> 로그인을 해주세요
            </Button>
          </div>

          <div
            className="gnb-tab-nav"
            style={
              isNavOpen
                ? { transition: '0.4s ease-out 0.2s', height: tabNavRef.current?.scrollHeight }
                : { transition: '0.4s ease-out' }
            }
            ref={tabNavRef}
          >
            <div className="sch-input">
              <TextInput
                placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                title="찾고자 하는 메뉴명 입력"
                className="krds-input"
                value={localSearchValue}
                onChange={(e) => setLocalSearchValue(e.target.value)}
                buttons={
                  <Button
                    type="button"
                    variant="icon"
                    color="none"
                    screenReaderTextForIcon="검색"
                    onClick={handleSearch}
                  >
                    <Icon name="sch" />
                  </Button>
                }
              />
            </div>

            <div className="menu-wrap">
              <ul role="tablist">
                {mainMenuItems.map((mainMenuItem) => (
                  <MainMenuItemMobileRenderer key={mainMenuItem.id} {...mainMenuItem} />
                ))}
                {menuLinks?.map((menuLink) => {
                  return (
                    <li key={menuLink.label + menuLink.href} role="none">
                      <a
                        href={menuLink.href}
                        className="gnb-main-trigger"
                        role="tab"
                        aria-selected="false"
                        aria-controls=""
                        id={`tab-${menuLink.href}`}
                      >
                        {menuLink.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="gnb-body">
          <div className="gnb-menu">
            <div id="menu-wrap-observer" />
            <div className="submenu-wrap">
              <div ref={menuWrapObserverRef} />
              {subMenuGroups.map((item) => (
                <SubMenuGroupMobileRenderer key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="gnb-bottom">{bottomLinks}</div>
        </div>

        <Button
          id="close-nav"
          type="button"
          size="medium"
          variant="icon"
          color="none"
          screenReaderTextForIcon="전체메뉴 닫기"
          onClick={handleClose}
        >
          <Icon name="popup-close" />
        </Button>
      </div>
    </nav>
  );
};

export default MainMenuMobileRendererType2;
