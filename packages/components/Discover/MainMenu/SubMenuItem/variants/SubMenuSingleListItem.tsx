import Button from '@/components/Action/Button/Button';
import Link from '@/components/Action/Link/Link';
import Icon from '@/components/Others/Icon/Icon';

interface SubMenuSingleListItemProps {
  id: string;
  subtitle?: string;
  link?: string;
  titleLinkText?: string;
  children: React.ReactNode;
  bannerTitle?: string;
  bannerButton?: string;
  bannerPosition?: 'bottom' | 'right';
}

const SubMenuSingleListItem = ({
  id,
  subtitle,
  link,
  titleLinkText,
  children,
  bannerTitle,
  bannerButton,
  bannerPosition = 'right',
}: SubMenuSingleListItemProps) => {
  return (
    <div id={id} className={['gnb-sub-list', 'single-list', bannerPosition === 'right' ? 'between' : ''].join(' ')}>
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
  );
};

export default SubMenuSingleListItem;
