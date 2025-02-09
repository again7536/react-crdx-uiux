import Icon from '@/components/Others/Icon/Icon';
import { useState } from 'react';

interface SubMenuContentsProps {
  title: string;
  description?: string;
  link?: string;
}

const SubMenuContents = ({ title, description, link }: SubMenuContentsProps) => {
  const [variant, setVariant] = useState<'menu' | 'menu-description'>('menu');

  return (
    <li
      ref={(node) => {
        setVariant(node?.parentElement?.dataset.variant as 'menu' | 'menu-description');
        return () => {};
      }}
    >
      {variant === 'menu' && <a href={link}>{title}</a>}
      {variant !== 'menu' && (
        <>
          <h3 className="tit">
            {link && (
              <a href={link} target="_blank" title="새 창 열림">
                {title} <Icon name="go" />
              </a>
            )}
            {!link && title}
          </h3>
          <p className="txt">{description}</p>
        </>
      )}
    </li>
  );
};

export default SubMenuContents;
export type { SubMenuContentsProps };
