import Dropdown from "@/components/Dropdown/Dropdown";

type HeaderButtonVariant = "login" | "join" | "myGov" | "search";

interface HeaderActionDropdownProps {
  id: string;
  children: React.ReactNode;
  variant?: HeaderButtonVariant;
  title?: string;
  dropTop?: React.ReactNode;
  dropItems?: React.ReactNode;
  dropBottom?: React.ReactNode;
}

const HEADER_BUTTON_VARIANT_CLASS: Record<HeaderButtonVariant, string> = {
  login: "login",
  join: "join",
  myGov: "my",
  search: "sch",
};

const HeaderActionDropdown = ({
  id,
  children,
  variant = "login",
  title,
  dropTop,
  dropItems,
  dropBottom,
}: HeaderActionDropdownProps) => {
  return (
    <Dropdown
      id={id}
      classNames={{
        button: `btn-navi ${HEADER_BUTTON_VARIANT_CLASS[variant]}`,
      }}
      title={title}
      dropItems={dropItems}
      dropBottom={dropBottom}
      dropTop={dropTop}
    >
      {children}
    </Dropdown>
  );
};

export default HeaderActionDropdown;
export type { HeaderActionDropdownProps };
