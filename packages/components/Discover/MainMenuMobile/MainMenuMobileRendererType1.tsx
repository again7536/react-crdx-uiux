import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import MainMenuItemMobileRenderer from './MainMenuItemMobile/MainMenuItemMobileRenderer';
import SubMenuGroupMobileRenderer from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { MainMenuMobileProps } from './MainMenuMobile';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import TextInput from '@/components/Input/TextInput/TextInput';
import React, { useEffect, useState, useRef } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import useFocusTrap from '@/hooks/useFocusTrap';

const MainMenuMobileRendererType1 = ({
  utilities,
  bottomLinks,
  serviceMenus,
  className,
  ...props
}: Omit<MainMenuMobileProps, 'children' | 'menuLinks'>) => {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [localSearchValue, setLocalSearchValue] = useState('');
  const { mainMenuItems, subMenuGroups, isOpen, handleClose, setSearchValue, handleTransitionDone } =
    useMainMenuMobileStore();

  const handleSearch = () => {
    setSearchValue(localSearchValue);
  };

  const handleBlankClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.gnb-wrap')) {
      target.querySelector<HTMLDivElement>('.gnb-wrap')?.focus();
    }
  };

  useEffect(() => {
    if (windowSize === 'pc') {
      handleClose();
    }
  }, [handleClose, windowSize]);

  useFocusTrap(mobileNavRef.current!);

  return (
    <div
      {...props}
      id="mobile-nav"
      className={`krds-main-menu-mobile ${isOpen ? 'is-open is-backdrop' : ''} ${className}`}
      onClick={handleBlankClick}
      onTransitionEnd={handleTransitionDone}
      ref={mobileNavRef}
    >
      <div className="gnb-wrap">
        <div className="gnb-header">
          <div className="gnb-utils">
            <ul className="utility-list">{utilities}</ul>
          </div>

          <div className="gnb-login">
            <Button type="button" className="large text">
              <Icon name="log" /> 로그인을 해주세요
            </Button>
          </div>

          <div className="gnb-service-menu">{serviceMenus}</div>

          <div className="sch-input">
            <TextInput
              placeholder="찾고자 하는 메뉴명을 입력해 주세요"
              title="찾고자 하는 메뉴명 입력"
              className="krds-input"
              value={localSearchValue}
              onChange={(e) => setLocalSearchValue(e.target.value)}
              buttons={
                <Button type="button" variant="icon" color="none" screenReaderTextForIcon="검색" onClick={handleSearch}>
                  <Icon name="sch" />
                </Button>
              }
            />
          </div>
        </div>

        <div className="gnb-body">
          <div className="gnb-menu">
            <div className="menu-wrap">
              <ul role="tablist">
                {mainMenuItems.map((item) => (
                  <MainMenuItemMobileRenderer key={item.id} {...item} />
                ))}
              </ul>
            </div>
            <div className="submenu-wrap">
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
    </div>
  );
};

export default React.memo(MainMenuMobileRendererType1);
