import { useCallback, useMemo } from "react";
import useKeyEvent from "@/hooks/useKeyEvent";
import useClickOutside from "@/hooks/useClickOutside";
import { useDropdownStore } from "./useDropdownStore";

interface DropdownProps {
  id?: string;
  children?: React.ReactNode;
  title?: string;
  dropItems?: React.ReactNode;
  dropBottom?: React.ReactNode;
  dropTop?: React.ReactNode;
  classNames?: {
    button?: string;
    menu?: string;
  };
}

/*
const krds_dropEvent = {
  dropButtons: null,
  init() {
    this.dropButtons = document.querySelectorAll(".krds-drop-wrap:not(.sample) .drop-btn");

    if (!this.dropButtons.length) return;

    this.setupEventListeners();
    this.setupFocusOutEvent();
  },
  setupEventListeners() {
    this.dropButtons.forEach((button) => {
      const menu = button.nextElementSibling;
      button.setAttribute("aria-expanded", "false");

      button.addEventListener("click", () => {
        const isOpen = menu.style.display === "block";
        this.closeAllDropdowns();
        if (!isOpen) {
          this.openDropdown(button, menu);
        }
      });

      this.setupMenuItems(menu);
    });
  },
  setupMenuItems(menu) {
    const items = menu.querySelectorAll(".item-link");

    items.forEach((item) => {
      item.innerHTML += `<span class="sr-only"></span>`;
      if (item.classList.contains("active")) {
        item.querySelector(".sr-only").innerHTML = "선택됨";
      }

      item.addEventListener("click", () => {
        this.activateMenuItem(item);
        this.closeAllDropdowns();
        const button = item.closest(".krds-drop-wrap").querySelector(".drop-btn");
        button?.focus();
      });

      item.addEventListener("focus", () => {
        document.querySelectorAll(".krds-drop-wrap .drop-list .item-link").forEach((item) => {
          item.style.position = "relative";
          item.style.zIndex = "0";
        });
        item.style.zIndex = "1";
      });
    });
  },
  activateMenuItem(selectedItem) {
    const menu = selectedItem.closest(".drop-menu");
    const items = menu.querySelectorAll(".item-link");

    items.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
      item.querySelector(".sr-only").innerText = "";
    });

    selectedItem.classList.add("active");
    selectedItem.setAttribute("aria-selected", "true");
    selectedItem.querySelector(".sr-only").innerText = "선택됨";
  },
  openDropdown(button, menu) {
    menu.style.display = "block";
    button.classList.add("active");
    button.setAttribute("aria-expanded", "true");

    // 여백에 따라 위치 조정
    const menuRect = menu.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    if (menuRect.left < 0) {
      menu.closest(".krds-drop-wrap").classList.add("drop-left");
    } else if (windowWidth < menuRect.left + menuRect.width) {
      menu.closest(".krds-drop-wrap").classList.add("drop-right");
    }

  },
  closeAllDropdowns() {
    document.querySelectorAll(".krds-drop-wrap .drop-menu").forEach((menu) => {
      menu.style.display = "none";
    });
    this.dropButtons.forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    });
  },
  setupFocusOutEvent() {
    // ESC 닫기
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        this.closeAllDropdowns();
        event.target.closest(".krds-drop-wrap")?.querySelector(".drop-btn")?.focus();
      }
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".krds-drop-wrap")) {
        this.closeAllDropdowns();
      }
    });

    // 드롭다운 포커스 아웃 처리
    this.dropButtons.forEach((button) => {
      const menu = button.nextElementSibling;

      if (!menu) return;

      // 드롭다운 메뉴의 포커스 아웃 처리
      menu.addEventListener("focusout", (event) => {
        const isFocusInside = menu.contains(event.relatedTarget) || button.contains(event.relatedTarget);
        if (!isFocusInside) {
          this.closeAllDropdowns();
        }
      });

      // 버튼의 포커스 아웃 처리
      button.addEventListener("focusout", (event) => {
        const isFocusInside = menu.contains(event.relatedTarget) || button.contains(event.relatedTarget);
        if (!isFocusInside) {
          this.closeAllDropdowns();
        }
      });
    });
  },
};
 */

const Dropdown = ({
  id = crypto.randomUUID(),
  children,
  title,
  dropItems,
  dropBottom,
  dropTop,
  classNames,
}: DropdownProps) => {
  const { openId, toggleDropdown } = useDropdownStore();
  const isOpen = openId === id;

  const handleEscape = useCallback(() => {
    if (isOpen) {
      toggleDropdown(null);
    }
  }, [isOpen, toggleDropdown]);

  const handleClickOutside = useCallback(() => {
    if (isOpen) {
      toggleDropdown(null);
      document.querySelector<HTMLButtonElement>(`#${id} .drop-btn`)?.focus();
    }
  }, [isOpen, toggleDropdown]);

  useKeyEvent("Escape", handleEscape);
  useClickOutside(`#${id}`, handleClickOutside);

  const menuPosition = useMemo(() => {
    const menu = document.querySelector(`#${id} .drop-menu`);
    const menuRect = menu?.getBoundingClientRect() ?? { left: 0, width: 0 };
    const windowWidth = window.innerWidth;

    if (menuRect?.left < 0) {
      return "drop-left";
    }
    if (windowWidth < menuRect?.left + menuRect?.width) {
      return "drop-right";
    }
    return "";
  }, [isOpen]);

  return (
    <div id={id} className='krds-drop-wrap'>
      <button
        type='button'
        className={`drop-btn ${isOpen ? "active" : ""} ${classNames?.button}`}
        title={title}
        onClick={() => toggleDropdown(id)}
        onBlur={() => toggleDropdown(null)}
      >
        {children}
      </button>
      <div
        className={`drop-menu ${menuPosition} ${classNames?.menu}`}
        aria-expanded={isOpen}
        onBlur={() => toggleDropdown(null)}
        style={
          isOpen
            ? {
                display: "block",
              }
            : undefined
        }
      >
        <div className='drop-in'>
          {dropTop && <div className='drop-top'>{dropTop}</div>}
          <ul className='drop-list'>{dropItems}</ul>
          {dropBottom && <div className='drop-bottom'>{dropBottom}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
export type { DropdownProps };
