import { useCallback, useMemo, useRef } from 'react';
import useKeyEvent from '@/hooks/useKeyEvent';
import useClickOutside from '@/hooks/useClickOutside';
import { useDropdownStore } from './useDropdownStore';

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

const Dropdown = ({
  id = crypto.randomUUID(),
  children,
  title,
  dropItems,
  dropBottom,
  dropTop,
  classNames,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
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
      dropdownRef.current?.querySelector<HTMLButtonElement>(`.drop-btn`)?.focus();
    }
  }, [isOpen, toggleDropdown]);

  useKeyEvent('Escape', handleEscape);
  useClickOutside(dropdownRef.current!, handleClickOutside);

  const menuPosition = useMemo(() => {
    const menu = dropdownRef.current?.querySelector(`.drop-menu`);
    const menuRect = menu?.getBoundingClientRect() ?? { left: 0, width: 0 };
    const windowWidth = window.innerWidth;

    if (menuRect?.left < 0) {
      return 'drop-left';
    }
    if (windowWidth < menuRect?.left + menuRect?.width) {
      return 'drop-right';
    }
    return '';
  }, [isOpen]);

  return (
    <div ref={dropdownRef} id={id} className="krds-drop-wrap">
      <button
        type="button"
        className={`drop-btn ${isOpen ? 'active' : ''} ${classNames?.button}`}
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
                display: 'block',
              }
            : undefined
        }
      >
        <div className="drop-in">
          {dropTop && <div className="drop-top">{dropTop}</div>}
          <ul className="drop-list">{dropItems}</ul>
          {dropBottom && <div className="drop-bottom">{dropBottom}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
export type { DropdownProps };
