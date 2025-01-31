import { useDropItemStore } from "./useDropItemStore";

interface DropItemProps {
  id?: string;
  children: React.ReactNode;
  link?: string;
}

const DropItem = ({
  id = crypto.randomUUID(),
  children,
  link,
}: DropItemProps) => {
  const { selectedId, toggleSelectedId } = useDropItemStore();
  const isSelected = selectedId === id;

  const handleClick = () => {
    toggleSelectedId(id);
  };

  return (
    <li>
      <a
        id={id}
        href={link ?? "#"}
        className={`item-link ${isSelected ? "active" : ""}`}
        aria-selected={isSelected}
        onClick={handleClick}
      >
        <span className='sr-only'>{isSelected ? "선택됨" : ""}</span>
        {children}
      </a>
    </li>
  );
};

export default DropItem;
export type { DropItemProps };
