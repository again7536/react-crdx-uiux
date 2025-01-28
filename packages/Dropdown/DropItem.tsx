interface DropItemProps {
  children: React.ReactNode;
  link?: string;
}

const DropItem = ({ children, link }: DropItemProps) => {
  return (
    <li>
      <a href={link ?? "#"} className='item-link'>
        {children}
      </a>
    </li>
  );
};

export default DropItem;
export type { DropItemProps };
