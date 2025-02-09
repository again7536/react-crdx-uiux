interface TagLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const TagLink = ({ children, className, ...props }: TagLinkProps) => {
  return (
    <a className={`krds-btn-tag link ${className}`} {...props}>
      {children}
    </a>
  );
};

export default TagLink;
export type { TagLinkProps };
