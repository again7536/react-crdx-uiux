interface TagProps {
  children: React.ReactNode;
  onDelete?: () => void;
  screenReaderTextForDelete?: string;
  className?: string;
}

const Tag = ({ children, onDelete, screenReaderTextForDelete = '삭제', className }: TagProps) => {
  return (
    <span className={`krds-btn-tag ${className}`}>
      {children}
      <button type="button" className="btn-delete" onClick={onDelete}>
        <span className="sr-only">{screenReaderTextForDelete}</span>
      </button>
    </span>
  );
};

export default Tag;
export type { TagProps };
