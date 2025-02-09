interface HeaderUtilityProps {
  children: React.ReactNode;
}

const HeaderUtility = ({ children }: HeaderUtilityProps) => {
  return (
    <li>
      <a href="#" className="krds-btn small text" target="_blank" title="새 창 열기">
        {children} <i className="svg-icon ico-go"></i>
      </a>
    </li>
  );
};

export default HeaderUtility;
export type { HeaderUtilityProps };
