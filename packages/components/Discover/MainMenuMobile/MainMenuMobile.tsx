import Button from '@/components/Action/Button/Button';
import { HeaderUtilityProps } from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import Icon from '@/components/Others/Icon/Icon';
import MainMenuItemMobileRenderer, { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobileRenderer';
import SubMenuGroupMobileRenderer, { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { LinkProps } from '@/components/Action/Link/Link';
import { useMainMenuMobileStore } from './useMainMenuMobileStore';

type MainMenuMobileChild = React.ReactElement<MainMenuItemMobileProps> | React.ReactElement<SubMenuGroupMobileProps>;
interface MainMenuMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: MainMenuMobileChild[] | MainMenuMobileChild;
  utilities?: React.ReactElement<HeaderUtilityProps>[];
  bottomLinks?: React.ReactElement<LinkProps>[];
}

const MainMenuMobile = ({ children, utilities, bottomLinks, className, ...props }: MainMenuMobileProps) => {
  const { mainMenuItems, subMenuGroups } = useMainMenuMobileStore();

  return (
    <div {...props} id="mobile-nav" className={`krds-main-menu-mobile ${className}`}>
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
        >
          <Icon name="popup-close" />
        </Button>
      </div>
    </div>
  );
};

export default MainMenuMobile;
