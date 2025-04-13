interface SkipLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  children: React.ReactNode;
}

const SkipLink = ({ children, href = '#breadcrumb', ...props }: SkipLinkProps) => {
  return (
    <div id="krds-skip-link" {...props}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default SkipLink;
export type { SkipLinkProps };
