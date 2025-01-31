import { HeaderUtilityDropdownProps } from "./HeaderUtility/HeaderUtilityDropdown";
import { HeaderUtilityProps } from "./HeaderUtility/HeaderUtility";
import { HeaderActionProps } from "./HeaderAction/HeaderAction";

interface HeaderProps {
  utilities?: React.ReactElement<
    HeaderUtilityProps | HeaderUtilityDropdownProps
  >[];
  logoUrl?: string;
  logoScreenReaderText?: string;
  actions?: React.ReactElement<HeaderActionProps>[];
}

const Header = ({
  utilities,
  logoUrl,
  logoScreenReaderText = "KRDS - Korea Design System",
  actions,
}: HeaderProps) => {
  return (
    <header id='krds-header'>
      <div className='header-in'>
        <div className='header-container'>
          <div className='inner'>
            <div className='header-utility'>
              <ul className='utility-list'>{utilities}</ul>
            </div>

            <div className='header-branding'>
              <h2
                className='logo'
                style={
                  logoUrl ? { backgroundImage: `url(${logoUrl})` } : undefined
                }
              >
                <a href='#'>
                  <span className='sr-only'>{logoScreenReaderText}</span>
                </a>
              </h2>
              <div className='header-actions'>{actions}</div>
            </div>
          </div>
        </div>

        <nav className='krds-main-menu'>
          <div className='inner'>
            <ul className='gnb-menu'>
              <li>
                <button
                  type='button'
                  className='gnb-main-trigger'
                  data-trigger='gnb'
                >
                  1Depth
                </button>

                <div className='gnb-toggle-wrap'>
                  <div className='gnb-main-list' data-has-submenu='true'>
                    <ul>
                      <li>
                        <button
                          type='button'
                          className='gnb-sub-trigger'
                          data-trigger='gnb'
                        >
                          2Depth
                        </button>

                        <div className='gnb-sub-list'>
                          <div className='gnb-sub-content'>
                            <h2 className='sub-title'>
                              2Depth title
                              <a href='#' className='krds-btn link basic small'>
                                <span className='underline'>바로가기</span>
                                <i className='svg-icon ico-angle right'></i>
                              </a>
                            </h2>
                            <ul>
                              <li>
                                <a href='#'>Last depth</a>
                              </li>
                              <li>
                                <button type='button'>Last depth</button>
                              </li>
                            </ul>
                          </div>
                          <div className='gnb-sub-banner'>
                            <span className='krds-badge bg-primary'>
                              신규 서비스
                            </span>
                            <button
                              type='button'
                              className='krds-btn medium text'
                            >
                              메뉴명{" "}
                              <i className='svg-icon ico-angle right'></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='gnb-sub-trigger'
                          data-trigger='gnb'
                        >
                          2Depth
                        </button>

                        <div className='gnb-sub-list between'>
                          <div className='gnb-sub-content'>
                            <h2 className='sub-title'>
                              2Depth title
                              <a href='#' className='krds-btn link basic small'>
                                <span className='underline'>바로가기</span>
                                <i className='svg-icon ico-angle right'></i>
                              </a>
                            </h2>
                            <ul>
                              <li>
                                <a href='#'>Last depth</a>
                              </li>
                              <li>
                                <button type='button'>Last depth</button>
                              </li>
                              <li>
                                <button type='button'>Last depth</button>
                              </li>
                            </ul>
                          </div>
                          <div className='gnb-sub-banner'>
                            <span className='krds-badge bg-primary'>
                              신규 서비스
                            </span>
                            <button
                              type='button'
                              className='krds-btn medium text'
                            >
                              메뉴명{" "}
                              <i className='svg-icon ico-angle right'></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='gnb-sub-trigger is-link'
                          data-trigger='gnb'
                        >
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='gnb-sub-trigger is-link external-link'
                          data-trigger='gnb'
                          target='_blank'
                          title='새 창 열림'
                        >
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  type='button'
                  className='gnb-main-trigger'
                  data-trigger='gnb'
                >
                  1Depth
                </button>

                <div className='gnb-toggle-wrap'>
                  <div className='gnb-main-list' data-has-submenu='true'>
                    <ul>
                      <li>
                        <button
                          type='button'
                          className='gnb-sub-trigger'
                          data-trigger='gnb'
                        >
                          2Depth
                        </button>

                        <div className='gnb-sub-list'>
                          <div className='gnb-sub-content'>
                            <h2 className='sub-title'>
                              <span>2Depth title</span>
                            </h2>
                            <ul className='type-description'>
                              <li>
                                <h3 className='tit'>
                                  <a
                                    href='#'
                                    target='_blank'
                                    title='새 창 열림'
                                  >
                                    3Depth title{" "}
                                    <i className='svg-icon ico-go'></i>
                                  </a>
                                </h3>
                                <p className='txt'>
                                  메뉴명과 메뉴에 관한 간략한 설명이 표시되는
                                  스타일입니다.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className='gnb-sub-banner'>
                            <span className='krds-badge bg-primary'>
                              신규 서비스
                            </span>
                            <button
                              type='button'
                              className='krds-btn medium text'
                            >
                              메뉴명{" "}
                              <i className='svg-icon ico-angle right'></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='gnb-sub-trigger'
                          data-trigger='gnb'
                        >
                          2Depth
                        </button>

                        <div className='gnb-sub-list between'>
                          <div className='gnb-sub-content'>
                            <h2 className='sub-title'>
                              <span>2Depth title</span>
                            </h2>
                            <ul className='type-description'>
                              <li>
                                <h3 className='tit'>
                                  <a
                                    href='#'
                                    target='_blank'
                                    title='새 창 열림'
                                  >
                                    3Depth title{" "}
                                    <i className='svg-icon ico-go'></i>
                                  </a>
                                </h3>
                                <p className='txt'>
                                  메뉴명과 메뉴에 관한 간략한 설명이 표시되는
                                  스타일입니다.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className='gnb-sub-banner'>
                            <span className='krds-badge bg-primary'>
                              신규 서비스
                            </span>
                            <button
                              type='button'
                              className='krds-btn medium text'
                            >
                              메뉴명{" "}
                              <i className='svg-icon ico-angle right'></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='gnb-sub-trigger is-link'
                          data-trigger='gnb'
                        >
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='gnb-sub-trigger is-link external-link'
                          data-trigger='gnb'
                          target='_blank'
                          title='새 창 열림'
                        >
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  type='button'
                  className='gnb-main-trigger'
                  data-trigger='gnb'
                >
                  1Depth
                </button>

                <div className='gnb-toggle-wrap'>
                  <div className='gnb-main-list'>
                    <div className='gnb-sub-list single-list between'>
                      <div className='gnb-sub-content'>
                        <h2 className='sub-title'>
                          <span>2Depth title</span>
                        </h2>
                        <ul>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                          <li>
                            <a href='#'>Last depth</a>
                          </li>
                        </ul>
                      </div>
                      <div className='gnb-sub-banner'>
                        <span className='krds-badge bg-primary'>
                          신규 서비스
                        </span>
                        <button type='button' className='krds-btn medium text'>
                          메뉴명 <i className='svg-icon ico-angle right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href='#'
                  className='gnb-main-trigger is-link'
                  data-trigger='gnb'
                >
                  링크(anchor)
                </a>
              </li>
              <li>
                <button
                  type='button'
                  className='gnb-main-trigger is-link'
                  data-trigger='gnb'
                >
                  링크(anchor)
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id='mobile-nav' className='krds-main-menu-mobile'>
        <div className='gnb-wrap'>
          <div className='gnb-header'>
            <div className='gnb-utils'>
              <ul className='utility-list'>
                <li>
                  <button type='button' className='krds-btn xsmall text'>
                    메뉴명
                  </button>
                </li>
                <li>
                  <button type='button' className='krds-btn xsmall text'>
                    메뉴명
                  </button>
                </li>
              </ul>
            </div>

            <div className='gnb-login'>
              {/* <span className="user">홍길동님</span>
            <button type="button" className="krds-btn large text"><i className="svg-icon ico-logout"></i> 로그아웃</button> */}
              <button type='button' className='krds-btn large text'>
                <i className='svg-icon ico-log'></i> 로그인을 해주세요
              </button>
            </div>

            <div className='gnb-service-menu'>
              <a href='#' className='link'>
                메뉴명
              </a>
              <a href='#' className='link'>
                메뉴명
              </a>
              <a href='#' className='link'>
                메뉴명
              </a>
              <a href='#' className='link'>
                메뉴명
              </a>
            </div>

            <div className='sch-input'>
              <input
                type='text'
                className='krds-input'
                placeholder='찾고자 하는 메뉴명을 입력해 주세요'
                title='찾고자 하는 메뉴명 입력'
              />
              <button type='button' className='krds-btn medium icon ico-search'>
                <span className='sr-only'>검색</span>
                <i className='svg-icon ico-sch'></i>
              </button>
            </div>
          </div>

          <div className='gnb-body'>
            <div className='gnb-menu'>
              <div className='menu-wrap'>
                <ul>
                  <li>
                    <a href='#mGnb-anchor1' className='gnb-main-trigger'>
                      1Depth
                    </a>
                  </li>
                  <li>
                    <a href='#mGnb-anchor2' className='gnb-main-trigger'>
                      1Depth
                    </a>
                  </li>
                  <li>
                    <a href='#mGnb-anchor3' className='gnb-main-trigger'>
                      1Depth
                    </a>
                  </li>
                  <li>
                    <a href='#mGnb-anchor4' className='gnb-main-trigger'>
                      1Depth
                    </a>
                  </li>
                  <li>
                    <a href='#mGnb-anchor5' className='gnb-main-trigger'>
                      1Depth
                    </a>
                  </li>
                </ul>
              </div>
              <div className='submenu-wrap'>
                <div className='gnb-sub-list' id='mGnb-anchor1'>
                  <h2 className='sub-title'>1Depth</h2>
                  <ul>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='gnb-sub-list' id='mGnb-anchor2'>
                  <h2 className='sub-title'>1Depth</h2>
                  <ul>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='gnb-sub-list' id='mGnb-anchor3'>
                  <h2 className='sub-title'>1Depth</h2>
                  <ul>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger has-depth3'>
                        2Depth
                      </a>
                      <div className='depth3-wrap'>
                        <ul>
                          <li>
                            <a href='#' className='depth3-trigger has-depth4'>
                              3Depth
                            </a>
                            <div className='depth4-wrap'>
                              <div className='depth4-head'>
                                <button
                                  type='button'
                                  className='krds-btn icon trigger-prev'
                                >
                                  <span className='sr-only'>이전화면</span>
                                  <i className='svg-icon ico-angle left'></i>
                                </button>
                                <button
                                  type='button'
                                  className='krds-btn icon trigger-close'
                                >
                                  <span className='sr-only'>전체메뉴 닫기</span>
                                  <i className='svg-icon ico-popup-close'></i>
                                </button>
                              </div>
                              <ul className='depth4-body'>
                                <h4 className='sub-title'>4Depth title</h4>
                                <ul className='depth4-ul'>
                                  <li>
                                    <a href='#'>depth title</a>
                                  </li>
                                  <li>
                                    <a href='#'>depth title</a>
                                  </li>
                                  <li>
                                    <a href='#'>depth title</a>
                                  </li>
                                  <li>
                                    <a href='#'>depth title</a>
                                  </li>
                                </ul>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href='#' className='depth3-trigger'>
                              3Depth
                            </a>
                          </li>
                          <li>
                            <a href='#' className='depth3-trigger'>
                              3Depth
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='gnb-sub-list' id='mGnb-anchor4'>
                  <h2 className='sub-title'>1Depth</h2>
                  <ul>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='gnb-sub-list' id='mGnb-anchor5'>
                  <h2 className='sub-title'>1Depth</h2>
                  <ul>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                    <li>
                      <a href='#' className='gnb-sub-trigger'>
                        2Depth
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='gnb-bottom'>
              <a href='#' className='krds-btn medium text'>
                메뉴명 <i className='svg-icon ico-angle right'></i>
              </a>
              <a
                href='#'
                className='krds-btn medium text'
                target='_blank'
                title='새 창 열기'
              >
                {" "}
                메뉴명 <i className='svg-icon ico-go'></i>
              </a>
            </div>
          </div>

          <button type='button' className='krds-btn medium icon' id='close-nav'>
            <span className='sr-only'>전체메뉴 닫기</span>
            <i className='svg-icon ico-popup-close'></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * const krds_mainMenuPC = {
  init() {
    const gnbMenu = document.querySelector(".krds-main-menu:not(.sample) .gnb-menu");

    if (!gnbMenu) return;

    // gnb 속성설정
    gnbMenu.setAttribute("aria-label", "메인 메뉴");

    // dimed 요소를 설정, 기존 dimed가 없을 경우 생성
    this.backdrop = document.querySelector(".gnb-backdrop") || this.createBackdrop();

    // 주 메뉴 및 서브 메뉴의 트리거를 설정하고, 각 트리거에 이벤트를 연결
    const mainTriggers = gnbMenu.querySelectorAll(".gnb-main-trigger");
    const subTriggers = gnbMenu.querySelectorAll(".gnb-sub-trigger:not(.is-link)");
    mainTriggers.forEach((mainTrigger) => this.setupMainTrigger(mainTrigger));
    this.attachEvents(mainTriggers, subTriggers);
    this.setupKeyboardNavigation(mainTriggers);
  },
  setupMainTrigger(mainTrigger) {
    const toggleWrap = mainTrigger.nextElementSibling;
    if (toggleWrap) {
      const uniqueIdx = `gnb-main-menu-${Math.random().toString(36).substring(2, 9)}`;
      mainTrigger.setAttribute("aria-controls", uniqueIdx);
      mainTrigger.setAttribute("aria-expanded", "false");
      mainTrigger.setAttribute("aria-haspopup", "true");
      toggleWrap.setAttribute("id", uniqueIdx);

      // 하위 메뉴 설정
      const mainList = toggleWrap.querySelector(".gnb-main-list");
      if (mainList?.getAttribute("data-has-submenu") === "true") {
        const subTriggers = mainList.querySelectorAll(".gnb-sub-trigger");
        subTriggers.forEach((subTrigger) => this.setupSubTrigger(subTrigger));
        if (subTriggers.length > 0 && !subTriggers[0].classList.contains("is-link")) {
          subTriggers[0].classList.add("active");
          subTriggers[0].setAttribute("aria-expanded", "true");
          subTriggers[0].nextElementSibling?.classList.add("active");
        }
      }
    }
  },
  setupSubTrigger(subTrigger) {
    const hasMenu = subTrigger.nextElementSibling;
    if (hasMenu) {
      const uniqueIdx = `gnb-sub-menu-${Math.random().toString(36).substring(2, 9)}`;
      subTrigger.setAttribute("aria-controls", uniqueIdx);
      subTrigger.setAttribute("aria-expanded", "false");
      subTrigger.setAttribute("aria-haspopup", "true");
      hasMenu.setAttribute("id", uniqueIdx);
    }
  },
  toggleMainMenu(mainTrigger) {
    const isActive = mainTrigger.classList.contains("active");
    const isDropDown = mainTrigger.classList.contains("is-dropdown");
    if (!isActive && mainTrigger.nextElementSibling) {
      this.resetMainMenu();
      mainTrigger.setAttribute("aria-expanded", "true");
      mainTrigger.classList.add("active");
      mainTrigger.nextElementSibling.classList.add("is-open");
      if (!isDropDown) {
        this.toggleBackdrop(true);
        this.toggleScrollbar(true);
        this.adjustSubMenuHeight(mainTrigger.nextElementSibling.querySelector(".gnb-main-list"));
      }
    } else {
      this.closeMainMenu();
    }
  },
  toggleSubMenu(subTrigger) {
    const otherSubTriggers = subTrigger.closest("ul").querySelectorAll(".gnb-sub-trigger:not(.is-link)");
    otherSubTriggers.forEach((trigger) => {
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
      trigger.nextElementSibling?.classList.remove("active");
    });
    subTrigger.classList.add("active");
    subTrigger.setAttribute("aria-expanded", "true");
    subTrigger.nextElementSibling?.classList.add("active");
    this.adjustSubMenuHeight(subTrigger.closest(".gnb-main-list"));
  },
  createBackdrop() {
    const backdrop = document.createElement("div");
    backdrop.classList.add("gnb-backdrop");
    document.body.appendChild(backdrop);
    // backdrop.style.display = "none";
    return backdrop;
  },
  toggleBackdrop(isOpen) {
    this.backdrop?.classList.toggle("active", isOpen);
    document.body.classList.toggle("is-gnb-web", isOpen);
    // this.backdrop.style.display = isOpen ? "block" : "none";
  },
  adjustSubMenuHeight(target) {
    // 서브 메뉴 높이를 활성 메뉴에 맞춰 조정
    const activeSubList = target.querySelector(".gnb-sub-list.active");
    const height = activeSubList?.scrollHeight || 0;
    target.style.minHeight = `${height}px`;
  },
  toggleScrollbar(isEnabled) {
    const isScrollNeeded = document.body.scrollHeight > window.innerHeight;
    document.body.classList.toggle("hasScrollY", isEnabled && isScrollNeeded);
  },
  resetMainMenu() {
    document.querySelectorAll(".krds-main-menu:not(.sample) .gnb-main-trigger:not(.is-link)").forEach((mainTrigger) => {
      mainTrigger.classList.remove("active");
      mainTrigger.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".krds-main-menu:not(.sample) .gnb-toggle-wrap").forEach((toggleWrap) => {
      toggleWrap.classList.remove("is-open");
    });
  },
  closeMainMenu() {
    this.resetMainMenu();
    this.toggleBackdrop(false);
    this.toggleScrollbar(false);
  },
  attachEvents(mainTriggers, subTriggers) {
    // krds-main-menu 외부 클릭시 닫기
    document.addEventListener("click", ({ target }) => {
      if (!target.closest(".krds-main-menu")) this.closeMainMenu();
    });

    // 백드롭 클릭 시 메뉴 닫기
    // this.backdrop.addEventListener("click", () => this.closeMainMenu());

    // ESC 키를 눌러 메뉴를 닫거나, TAB 키로 초점이 메뉴 외부로 이동했을 때 메뉴 닫기
    document.addEventListener("keyup", (event) => {
      if (event.code === "Escape" || !event.target.closest(".krds-main-menu")) {
        this.closeMainMenu();
      }
    });

    // 메인 메뉴 트리거 설정
    mainTriggers.forEach((mainTrigger) => {
      mainTrigger.addEventListener("click", () => this.toggleMainMenu(mainTrigger));
    });

    // 서브 메뉴 트리거 설정
    subTriggers.forEach((subTrigger) => {
      subTrigger.addEventListener("click", () => this.toggleSubMenu(subTrigger));
    });
  },
  setupKeyboardNavigation(mainTriggers) {
    const focusMenuItem = (element) => {
      if (element) {
        element.focus();
      }
    };
    const findFocusableElement = (element, direction) => {
      const sibling = direction === "next" ? "nextElementSibling" : "previousElementSibling";
      const parent = element.closest("li")?.[sibling];
      return parent ? parent.querySelector("[data-trigger]") : null;
    };
    // Home, End, 방향키를 통해 메뉴 항목 간의 이동을 처리
    document.addEventListener("keydown", (event) => {
      const target = event.target;
      if (target.getAttribute("data-trigger")) {
        switch (event.key) {
          case "Home":
            event.preventDefault();
            focusMenuItem(mainTriggers[0]);
            break;
          case "End":
            event.preventDefault();
            focusMenuItem(mainTriggers[mainTriggers.length - 1]);
            break;
          case "ArrowRight":
          case "ArrowDown":
            event.preventDefault();
            const nextElement = findFocusableElement(target, "next");
            focusMenuItem(nextElement);
            break;
          case "ArrowLeft":
          case "ArrowUp":
            event.preventDefault();
            const previousElement = findFocusableElement(target, "prev");
            focusMenuItem(previousElement);
            break;
          default:
            break;
        }
      }
    });
  },
};
 */
