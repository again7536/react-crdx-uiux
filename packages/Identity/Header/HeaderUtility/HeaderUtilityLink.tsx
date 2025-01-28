interface HeaderUtilityLinkProps {
  children: React.ReactNode;
}

const HeaderUtilityLink = ({ children }: HeaderUtilityLinkProps) => {
  return (
    <li>
      <a
        href='#'
        className='krds-btn small text'
        target='_blank'
        title='새 창 열기'
      >
        {children} <i className='svg-icon ico-go'></i>
      </a>
    </li>
  );
};

export default HeaderUtilityLink;
export type { HeaderUtilityLinkProps };
