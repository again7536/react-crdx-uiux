import { TagProps } from './Tag';
import { TagLinkProps } from './TagLink';

interface TagGroupProps {
  children: React.ReactElement<TagProps | TagLinkProps>[];
  size?: 'small' | 'medium' | 'large';
}

const TagGroup = ({ children, size = 'medium' }: TagGroupProps) => {
  return <div className={`krds-tag-wrap ${size}`}>{children}</div>;
};

export default TagGroup;
