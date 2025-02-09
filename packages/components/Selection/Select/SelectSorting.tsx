interface SelectSortingProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
}

const SelectSorting = ({ children, size = 'medium', ...props }: SelectSortingProps) => {
  return (
    <select className={`krds-form-select-sort ${size}`} title="선택" {...props}>
      {children}
    </select>
  );
};

export default SelectSorting;
