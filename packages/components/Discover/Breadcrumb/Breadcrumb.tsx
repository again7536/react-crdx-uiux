interface BreadcrumbProps {
  paths: {
    label: string;
    href: string;
    home?: boolean;
  }[];
}

function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="krds-breadcrumb-wrap" aria-label="현재 경로" id="breadcrumb">
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
