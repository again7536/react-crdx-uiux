import classNames from 'classnames';

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  paths: {
    label: string;
    href: string;
    home?: boolean;
  }[];
}

function Breadcrumb({ paths, ...props }: BreadcrumbProps) {
  return (
    <nav
      {...props}
      className={classNames('krds-breadcrumb-wrap', props.className)}
      aria-label="현재 경로"
      id="breadcrumb"
    >
      <ol className="breadcrumb">
        {paths.map((path) => {
          return (
            <li key={path.label + path.href} className={path.home ? 'home' : ''}>
              <a href={path.href} className="txt">
                {path.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
