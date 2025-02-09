interface SkipLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink = ({ children, className, href = '#breadcrumb' }: SkipLinkProps) => {
  return (
    <div id="krds-skip-link" className={className}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default SkipLink;
export type { SkipLinkProps };
