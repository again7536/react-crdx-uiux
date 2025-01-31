import Header from "./Header";
import HeaderUtilityLink from "./HeaderUtility/HeaderUtility";
import HeaderUtilityDropdown from "./HeaderUtility/HeaderUtilityDropdown";
import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderActionDropdown from "./HeaderAction/HeaderActionDropdown";
import DropItem from "@/components/Dropdown/DropItem";

export default {
  title: "Identity/Header",
  component: Header,
};

export const Default = () => (
  <Header
    utilities={[
      <HeaderUtilityLink>메뉴명</HeaderUtilityLink>,
      <HeaderUtilityDropdown
        id='utility-dropdown'
        dropItems={[<DropItem>메뉴명</DropItem>]}
      >
        메뉴명
      </HeaderUtilityDropdown>,
    ]}
    actions={[
      <HeaderAction variant='login'>로그인</HeaderAction>,
      <HeaderAction variant='join'>회원가입</HeaderAction>,
      <HeaderActionDropdown
        id='myGov-dropdown'
        variant='myGov'
        dropItems={[
          <DropItem key={1}>나의 GOV</DropItem>,
          <DropItem key={2}>나의 신청내역</DropItem>,
          <DropItem key={3}>나의 생활정보</DropItem>,
          <DropItem key={4}>나의 정보관리</DropItem>,
        ]}
      >
        나의 GOV
      </HeaderActionDropdown>,
      <HeaderAction variant='all' aria-controls='mobile-nav'>
        전체메뉴
      </HeaderAction>,
    ]}
  />
);
