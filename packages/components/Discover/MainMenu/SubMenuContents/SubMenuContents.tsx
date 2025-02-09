import Icon from '@/components/Others/Icon/Icon';

interface SubMenuContentsProps {
  title: string;
  description?: string;
  link?: string;
  variant?: 'link' | 'description';
}

const SubMenuContents = ({ title, description, link, variant = 'link' }: SubMenuContentsProps) => {
  if (variant === 'link') {
    return (
      <li>
        <a href={link}>{title}</a>
      </li>
    );
  }

  return (
    <li>
      <h3 className="tit">
        <a href="#" target="_blank" title="새 창 열림">
          {title} <Icon name="go" />
        </a>
      </h3>
      <p className="txt">{description}</p>
    </li>
  );
};

export default SubMenuContents;
