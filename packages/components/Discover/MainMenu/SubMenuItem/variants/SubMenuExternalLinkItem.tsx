interface SubMenuExternalLinkItemProps {
  id: string;
  link?: string;
  title: string;
}

const SubMenuExternalLinkItem = ({ id, link, title }: SubMenuExternalLinkItemProps) => {
  if (!link) {
    console.warn('link가 없습니다.');
    return null;
  }

  return (
    <li id={id}>
      <a href={link} className="gnb-sub-trigger is-link external-link" data-trigger="gnb" target="_blank" title={title}>
        {title}
      </a>
    </li>
  );
};

export default SubMenuExternalLinkItem;
