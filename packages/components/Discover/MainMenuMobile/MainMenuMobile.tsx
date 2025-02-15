import Button from '@/components/Action/Button/Button';
import { HeaderUtilityProps } from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import Icon from '@/components/Others/Icon/Icon';
import { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobile';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobile';
import { LinkProps } from '@/components/Action/Link/Link';

interface MainMenuMobileProps {
  utilities?: React.ReactElement<HeaderUtilityProps>[];
  mainMenuItems: React.ReactElement<MainMenuItemMobileProps>[] | React.ReactElement<MainMenuItemMobileProps>;
  subMenuGroups: React.ReactElement<SubMenuGroupMobileProps>[] | React.ReactElement<SubMenuGroupMobileProps>;
  bottomLinks?: React.ReactElement<LinkProps>[] | React.ReactElement<LinkProps>;
}

const MainMenuMobile = ({ utilities, mainMenuItems, subMenuGroups, bottomLinks }: MainMenuMobileProps) => {
  return (
    <div
      id="mobile-nav"
      className="krds-main-menu-mobile sample"
      style={{ display: 'block', position: 'static', visibility: 'visible' }}
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
              <ul>{mainMenuItems}</ul>
            </div>
            <div className="submenu-wrap">{subMenuGroups}</div>
          </div>

          <div className="gnb-bottom">{bottomLinks}</div>
        </div>

        <Button id="close-nav" type="button" size="medium" icon="popup-close" screenReaderTextForIcon="전체메뉴 닫기" />
      </div>
    </div>
  );
};

export default MainMenuMobile;
