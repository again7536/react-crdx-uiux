import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import { MainMenuMobileProps } from './MainMenuMobile';
import SubMenuGroupMobileRenderer from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useFocusTrap from '@/hooks/useFocusTrap';
import useWindowSize from '@/hooks/useWindowSize';

const MainMenuMobileRendererType2 = ({
  utilities,
  bottomLinks,
  className,
  ...props
}: Omit<MainMenuMobileProps, 'children'>) => {
  const { subMenuGroups, isOpen, handleClose, handleTransitionDone } = useMainMenuMobileStore();
  const menuWrapObserverRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavTransitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavTransition, setIsNavTransition] = useState(false);
  const windowSize = useWindowSize();

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
  }, [windowSize]);

  useFocusTrap(mobileNavRef.current!);

  return (
    <nav
      {...props}
      id="mobile-nav"
      className={`krds-main-menu-mobile ${isOpen ? 'is-open is-backdrop' : ''} ${className}`}
      onTransitionEnd={handleTransitionDone}
      ref={mobileNavRef}
    >
      <div className={`gnb-wrap type-header-tab ${isNavTransition ? 'is-active' : ''}`} tabIndex={0}>
        <div className="gnb-header">
          <div className="gnb-utils">
            <ul className="utility-list">{utilities}</ul>
          </div>

          <div className="gnb-login">
            <button type="button" className="krds-btn large text">
              <i className="svg-icon ico-log"></i> 로그인을 해주세요
            </button>
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
              <input
                type="text"
                className="krds-input"
                placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                title="찾고자 하는 메뉴명 입력"
              />
              <button type="button" className="krds-btn medium icon ico-search">
                <span className="sr-only">검색</span>
                <i className="svg-icon ico-sch"></i>
              </button>
            </div>

            <div className="menu-wrap">
              <ul role="tablist">
                {subMenuGroups.map((subMenuGroup) => {
                  return (
                    <li key={subMenuGroup.id} role="none">
                      <a
                        href={`#${subMenuGroup.id}`}
                        className="gnb-main-trigger active"
                        role="tab"
                        aria-selected="true"
                        aria-controls={subMenuGroup.id}
                        id={`tab-${subMenuGroup.id}`}
                      >
                        {subMenuGroup.title}
                      </a>
                    </li>
                  );
                })}
                <li role="none">
                  <a href="#" className="gnb-main-trigger" role="tab" aria-selected="false" aria-controls="" id="tab-5">
                    단순링크
                  </a>
                </li>
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
