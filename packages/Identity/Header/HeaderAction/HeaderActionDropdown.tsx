import Dropdown from "@/Dropdown/Dropdown";

type HeaderButtonVariant = "login" | "join" | "myGov" | "search";

interface HeaderActionDropdownProps {
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
  children,
  variant = "login",
  title,
  dropTop,
  dropItems,
  dropBottom,
}: HeaderActionDropdownProps) => {
  return (
    <Dropdown
      buttonClassName={`btn-navi ${HEADER_BUTTON_VARIANT_CLASS[variant]} drop-btn`}
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
