import Icon from '@/components/Others/Icon/Icon';
import { useContext } from 'react';
import { SubMenuContext } from '@/hooks/store/Discover/MainMenu/useSubMenuItemStore';
import { useStore } from 'zustand';

interface SubMenuContentsProps {
  title: string;
  description?: string;
  link?: string;
}

const SubMenuContents = ({ title, description, link }: SubMenuContentsProps) => {
  const subMenuStore = useContext(SubMenuContext);
  const { variant, isSingleList } = useStore(subMenuStore!);

  return (
    <li>
      {(variant === 'menu' || isSingleList) && <a href={link}>{title}</a>}
      {variant === 'menu-description' && (
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
