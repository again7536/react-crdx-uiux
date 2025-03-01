import Button from '@/components/Action/Button/Button';
import Link from '@/components/Action/Link/Link';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { getSubMenuUniqueId } from '@/utils/MainMenuUtil';
import { useMainMenuStore } from '@/hooks/store/Discover/MainMenu/useMainMenuStore';
import { MainMenuContext } from '@/hooks/store/Discover/MainMenu/useMainMenuItemStore';
import { SubMenuContentsProps } from '../SubMenuContents/SubMenuContents';
import { SubMenuContext, useCreateSubMenuItemStore } from '@/hooks/store/Discover/MainMenu/useSubMenuItemStore';
import { useStore } from 'zustand';
interface SubMenuItemProps {
  id?: string;
  title: string;
  variant?: 'menu' | 'link' | 'external-link' | 'menu-description';
  subtitle?: string;
  link?: string;
  titleLinkText?: string;
  bannerTitle?: string;
  bannerButton?: string;
  bannerPosition?: 'bottom' | 'right';
  children?: React.ReactElement<SubMenuContentsProps>[] | React.ReactElement<SubMenuContentsProps>;
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
  bannerPosition = 'bottom',
  children,
}: SubMenuItemProps) => {
  const mainMenuStore = useContext(MainMenuContext);
  const { hasSubMenu } = useStore(mainMenuStore!);
  const { openedSubMenuId, toggleSubMenu } = useMainMenuStore();
  const uniqueId = useMemo(() => id ?? getSubMenuUniqueId(), []);
  const subMenuStore = useCreateSubMenuItemStore(uniqueId);
  const { setVariant, setIsSingleList } = useStore(subMenuStore);

  useEffect(() => {
    setVariant(variant);
  }, [variant, setVariant]);

  useEffect(() => {
    setIsSingleList(!hasSubMenu);
  }, [hasSubMenu, setIsSingleList]);

  const handleClickSubMenu = useCallback(() => {
    toggleSubMenu?.(uniqueId);
  }, [toggleSubMenu, uniqueId]);

  if (!hasSubMenu) {
    return (
      <SubMenuContext value={subMenuStore}>
        <div
          id={uniqueId}
          className={['gnb-sub-list', 'single-list', bannerPosition === 'right' ? 'between' : ''].join(' ')}
        >
          <div className="gnb-sub-content">
            <h2 className="sub-title">
              {subtitle}
              {link && titleLinkText && (
                <Link href={link} basic size="small" icon="angle right" underline>
                  {titleLinkText}
                </Link>
              )}
            </h2>
            <ul data-variant="single-list">{children}</ul>
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
      </SubMenuContext>
    );
  }

  if (variant === 'link') {
    return (
      <li id={uniqueId}>
        <a href={link} className="gnb-sub-trigger is-link" data-trigger="gnb">
          {title}
        </a>
      </li>
    );
  }

  if (variant === 'external-link') {
    return (
      <li id={uniqueId}>
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
    <SubMenuContext value={subMenuStore}>
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

        <div
          className={[
            'gnb-sub-list',
            openedSubMenuId === uniqueId ? 'active' : '',
            bannerPosition === 'right' ? 'between' : '',
          ].join(' ')}
        >
          <div className="gnb-sub-content">
            <h2 className="sub-title">
              {subtitle}
              {link && titleLinkText && (
                <Link href={link} basic size="small" icon="angle right" underline>
                  {titleLinkText}
                </Link>
              )}
            </h2>
            <ul className={`${variant === 'menu-description' ? 'type-description' : ''}`} data-variant={variant}>
              {children}
            </ul>
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
    </SubMenuContext>
  );
};

export default SubMenuItem;
export type { SubMenuItemProps };
