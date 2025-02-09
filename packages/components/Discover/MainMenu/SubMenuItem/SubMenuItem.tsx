import Button from '@/components/Action/Button/Button';
import Link from '@/components/Action/Link/Link';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useMemo } from 'react';
import { getSubMenuUniqueId } from '@/utils/MainMenuUtil';
import { useMenuStore } from '../useMenuStore';

interface SubMenuItemProps {
  id?: string;
  title: string;
  variant?: 'menu' | 'link' | 'external-link' | 'menu-description';
  subtitle?: string;
  link?: string;
  titleLinkText?: string;
  bannerTitle?: string;
  bannerButton?: string;
  children?: React.ReactNode;
}

const SubMenuItem = ({
  id,
  title,
  subtitle,
  variant = 'menu',
  link,
  titleLinkText = '바로가기',
  bannerTitle,
  bannerButton,
  children,
}: SubMenuItemProps) => {
  const { openedSubMenuId, toggleSubMenu } = useMenuStore();
  const uniqueId = useMemo(() => id ?? getSubMenuUniqueId(), []);

  const handleClickSubMenu = useCallback(() => {
    toggleSubMenu?.(uniqueId);
  }, [toggleSubMenu, uniqueId]);

  if (variant === 'link') {
    return (
      <li>
        <a href={link} className="gnb-sub-trigger is-link" data-trigger="gnb">
          {title}
        </a>
      </li>
    );
  }

  if (variant === 'external-link') {
    return (
      <li>
        <a
          href={link}
          className="gnb-sub-trigger is-link external-link"
          data-trigger="gnb"
          target="_blank"
          title={title}
        >
          {title}
        </a>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className={`gnb-sub-trigger ${openedSubMenuId === uniqueId ? 'active' : ''}`}
        data-trigger="gnb"
        aria-controls={uniqueId}
        aria-expanded={openedSubMenuId === uniqueId}
        aria-haspopup="true"
        id={uniqueId}
        onClick={handleClickSubMenu}
      >
        {title}
      </button>

      <div className={`gnb-sub-list ${openedSubMenuId === uniqueId ? 'active' : ''}`}>
        <div className="gnb-sub-content">
          <h2 className="sub-title">
            {subtitle}
            {link && titleLinkText && (
              <Link href={link} basic size="small" icon="angle right" underline>
                {titleLinkText}
              </Link>
            )}
          </h2>
          <ul className={`${variant === 'menu-description' ? 'type-description' : ''}`}>{children}</ul>
        </div>
        {bannerTitle && bannerButton && (
          <div className="gnb-sub-banner">
            <span className="krds-badge bg-primary">{bannerTitle}</span>
            <Button variant="text" size="medium">
              {bannerButton} <Icon name="angle right" />
            </Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default SubMenuItem;
export type { SubMenuItemProps };
