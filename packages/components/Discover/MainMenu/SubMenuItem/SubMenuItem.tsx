import Button from '@/components/Action/Button/Button';
import Link from '@/components/Action/Link/Link';
import Icon from '@/components/Others/Icon/Icon';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { getSubMenuUniqueId } from '@/utils/MainMenuUtil';
import { useMainMenuStore } from '@/hooks/store/Discover/MainMenu/useMainMenuStore';
import { MainMenuItemContext } from '@/hooks/store/Discover/MainMenu/useMainMenuItemStore';
import { SubMenuContentsProps } from '../SubMenuContents/SubMenuContents';
import { SubMenuContext, useCreateSubMenuItemStore } from '@/hooks/store/Discover/MainMenu/useSubMenuItemStore';
import { useStore } from 'zustand';
import SubMenuLinkItem from './variants/SubMenuLinkItem';
import SubMenuExternalLinkItem from './variants/SubMenuExternalLinkItem';
import SubMenuSingleListItem from './variants/SubMenuSingleListItem';
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
  const mainMenuItemStore = useContext(MainMenuItemContext);
  const { addSubMenu, removeSubMenu, isSingleList } = useStore(mainMenuItemStore!);
  const { isSubMenuOpened, toggleSubMenu } = useMainMenuStore();
  const uniqueId = useMemo(() => id ?? getSubMenuUniqueId(), []);
  const subMenuStore = useCreateSubMenuItemStore(uniqueId);
  const { setVariant } = useStore(subMenuStore);

  const isOpened = isSubMenuOpened(uniqueId);

  const handleClickSubMenu = useCallback(() => {
    if (!isOpened) {
      toggleSubMenu?.(uniqueId);
    }
  }, [toggleSubMenu, uniqueId, isOpened]);

  useEffect(() => {
    setVariant(variant);
  }, [variant, setVariant]);

  useEffect(() => {
    addSubMenu(uniqueId);

    return () => {
      removeSubMenu(uniqueId);
    };
  }, [addSubMenu, removeSubMenu, uniqueId]);

  if (isSingleList()) {
    return (
      <SubMenuContext value={subMenuStore}>
        <SubMenuSingleListItem
          id={uniqueId}
          subtitle={subtitle}
          link={link}
          titleLinkText={titleLinkText}
          bannerTitle={bannerTitle}
          bannerButton={bannerButton}
          bannerPosition={bannerPosition}
        >
          {children}
        </SubMenuSingleListItem>
      </SubMenuContext>
    );
  }
  if (variant === 'link') {
    return <SubMenuLinkItem id={uniqueId} link={link} title={title} />;
  }
  if (variant === 'external-link') {
    return <SubMenuExternalLinkItem id={uniqueId} link={link} title={title} />;
  }

  return (
    <SubMenuContext value={subMenuStore}>
      <li>
        <button
          type="button"
          className={`gnb-sub-trigger ${isOpened ? 'active' : ''}`}
          data-trigger="gnb"
          aria-controls={uniqueId}
          aria-expanded={isOpened}
          aria-haspopup="true"
          id={uniqueId}
          onClick={handleClickSubMenu}
        >
          {title}
        </button>

        <div
          className={['gnb-sub-list', isOpened ? 'active' : '', bannerPosition === 'right' ? 'between' : ''].join(' ')}
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
