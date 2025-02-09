import MainMenuItem, { MainMenuItemProps } from './MainMenuItem/MainMenuItem';
import { useState } from 'react';

interface MainMenuProps {
  mainMenus: MainMenuItemProps[];
}

const MainMenu = ({ mainMenus }: MainMenuProps) => {
  const [openedMainMenu, setOpenedMainMenu] = useState<string>();

  return (
    <nav className="krds-main-menu">
      <div className="inner">
        <ul className="gnb-menu" aria-label="메인 메뉴">
          {mainMenus.map((mainMenu) => (
            <MainMenuItem
              key={mainMenu.title}
              {...mainMenu}
              openedMenuId={openedMainMenu}
              onClickMainMenu={(mainMenuId) =>
                setOpenedMainMenu(openedMainMenu === mainMenuId ? undefined : mainMenuId)
              }
            />
          ))}

          {/* <li>
            <button type="button" className="gnb-main-trigger" data-trigger="gnb">
              1Depth
            </button>

            <div className="gnb-toggle-wrap">
              <div className="gnb-main-list" data-has-submenu="true">
                <ul>
                  <li>
                    <button type="button" className="gnb-sub-trigger" data-trigger="gnb">
                      2Depth
                    </button>

                    <div className="gnb-sub-list">
                      <div className="gnb-sub-content">
                        <h2 className="sub-title">
                          <span>2Depth title</span>
                        </h2>
                        <ul className="type-description">
                          <li>
                            <h3 className="tit">
                              <a href="#" target="_blank" title="새 창 열림">
                                3Depth title <i className="svg-icon ico-go"></i>
                              </a>
                            </h3>
                            <p className="txt">메뉴명과 메뉴에 관한 간략한 설명이 표시되는 스타일입니다.</p>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-sub-banner">
                        <span className="krds-badge bg-primary">신규 서비스</span>
                        <button type="button" className="krds-btn medium text">
                          메뉴명 <i className="svg-icon ico-angle right"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button type="button" className="gnb-sub-trigger" data-trigger="gnb">
                      2Depth
                    </button>

                    <div className="gnb-sub-list between">
                      <div className="gnb-sub-content">
                        <h2 className="sub-title">
                          <span>2Depth title</span>
                        </h2>
                        <ul className="type-description">
                          <li>
                            <h3 className="tit">
                              <a href="#" target="_blank" title="새 창 열림">
                                3Depth title <i className="svg-icon ico-go"></i>
                              </a>
                            </h3>
                            <p className="txt">메뉴명과 메뉴에 관한 간략한 설명이 표시되는 스타일입니다.</p>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-sub-banner">
                        <span className="krds-badge bg-primary">신규 서비스</span>
                        <button type="button" className="krds-btn medium text">
                          메뉴명 <i className="svg-icon ico-angle right"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="gnb-sub-trigger is-link" data-trigger="gnb">
                      2Depth
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="gnb-sub-trigger is-link external-link"
                      data-trigger="gnb"
                      target="_blank"
                      title="새 창 열림"
                    >
                      2Depth
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <button type="button" className="gnb-main-trigger" data-trigger="gnb">
              1Depth
            </button>

            <div className="gnb-toggle-wrap">
              <div className="gnb-main-list">
                <div className="gnb-sub-list single-list between">
                  <div className="gnb-sub-content">
                    <h2 className="sub-title">
                      <span>2Depth title</span>
                    </h2>
                    <ul>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                      <li>
                        <a href="#">Last depth</a>
                      </li>
                    </ul>
                  </div>
                  <div className="gnb-sub-banner">
                    <span className="krds-badge bg-primary">신규 서비스</span>
                    <button type="button" className="krds-btn medium text">
                      메뉴명 <i className="svg-icon ico-angle right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#" className="gnb-main-trigger is-link" data-trigger="gnb">
              링크(anchor)
            </a>
          </li>
          <li>
            <button type="button" className="gnb-main-trigger is-link" data-trigger="gnb">
              링크(button)
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
export type { MainMenuProps };
