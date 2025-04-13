import Button from '@/components/Action/Button/Button';
import classNames from 'classnames';
import React from 'react';

interface InPageNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  caption: string;
  items: {
    label: string;
    href: string;
  }[];
  actions: {
    label: string;
    info: string;
  }[];
}

function InPageNavigation({ title, caption, items, actions, ...props }: InPageNavigationProps) {
  return (
    <div {...props} className={classNames('krds-in-page-navigation-type', props.className)}>
      <div className="krds-in-page-navigation-area">
        <div className="in-page-navigation-header">
          <p className="quick-caption">{caption}</p>
          <p className="quick-title">{title}</p>
        </div>
        <nav className="in-page-navigation-list">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={item.href === window.location.hash ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="in-page-navigation-action">
          {actions.map((action) => (
            <React.Fragment key={action.label}>
              <Button color="none" size="medium">
                {action.label}
              </Button>
              <p className="quick-info">{action.info}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InPageNavigation;
