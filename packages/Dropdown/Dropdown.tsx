import { useState } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  children: React.ReactNode;
  buttonClassName?: string;
  title?: string;
  dropItems?: React.ReactNode;
  dropBottom?: React.ReactNode;
  dropTop?: React.ReactNode;
}

const Dropdown = ({
  children,
  buttonClassName,
  title,
  dropItems,
  dropBottom,
  dropTop,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='krds-drop-wrap'>
      <button
        type='button'
        className={`${buttonClassName} drop-btn`}
        title={title}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </button>
      <div className={`drop-menu ${isOpen ? "is-open" : ""}`}>
        <div className='drop-in'>
          {dropTop && <div className='drop-top'>{dropTop}</div>}
          <ul className='drop-list'>{dropItems}</ul>
          {dropBottom && <div className='drop-bottom'>{dropBottom}</div>}{" "}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
export type { DropdownProps };
