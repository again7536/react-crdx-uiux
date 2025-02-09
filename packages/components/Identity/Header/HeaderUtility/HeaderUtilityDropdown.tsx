import Dropdown, { DropdownProps } from '@/components/Dropdown/Dropdown';

interface HeaderUtilityDropdownProps extends DropdownProps {
  children: React.ReactNode;
  dropItems?: React.ReactNode;
}

const HeaderUtilityDropdown = ({ children, id, dropItems, title, dropBottom, dropTop }: HeaderUtilityDropdownProps) => {
  return (
    <li>
      <Dropdown
        id={id}
        classNames={{
          button: 'krds-btn small text',
        }}
        title={title}
        dropItems={dropItems}
        dropBottom={dropBottom}
        dropTop={dropTop}
      >
        {children}
      </Dropdown>
    </li>
  );
};

export default HeaderUtilityDropdown;
export type { HeaderUtilityDropdownProps };
