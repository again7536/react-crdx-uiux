interface SubMenuLinkItemProps {
  id: string;
  link?: string;
  title: string;
}

const SubMenuLinkItem = ({ id, link, title }: SubMenuLinkItemProps) => {
  if (!link) {
    console.warn('link가 없습니다.');
    return null;
  }

  return (
    <li id={id}>
      <a href={link} className="gnb-sub-trigger is-link" data-trigger="gnb">
        {title}
      </a>
    </li>
  );
};

export default SubMenuLinkItem;
