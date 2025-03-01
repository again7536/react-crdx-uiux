import Button from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import MainMenuItemMobileRenderer from './MainMenuItemMobile/MainMenuItemMobileRenderer';
import SubMenuGroupMobileRenderer from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { MainMenuMobileProps } from './MainMenuMobile';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';

const MainMenuMobileRenderer = ({ children, utilities, bottomLinks, className, ...props }: MainMenuMobileProps) => {
  const { mainMenuItems, subMenuGroups, isOpen, setIsOpen } = useMainMenuMobileStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div {...props} id="mobile-nav" className={`krds-main-menu-mobile ${isOpen ? 'is-open' : ''} ${className}`}>
      {children}
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

          <div className="gnb-service-menu">
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
            <a href="#" className="link">
              메뉴명
            </a>
          </div>

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
        </div>

        <div className="gnb-body">
          <div className="gnb-menu">
            <div className="menu-wrap">
              <ul>
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

export default MainMenuMobileRenderer;
export type { MainMenuMobileProps };
