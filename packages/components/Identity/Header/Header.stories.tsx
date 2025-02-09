import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import HeaderUtilityLink from './HeaderUtility/HeaderUtility';
import HeaderUtilityDropdown from './HeaderUtility/HeaderUtilityDropdown';
import HeaderAction from './HeaderAction/HeaderAction';
import HeaderActionDropdown from './HeaderAction/HeaderActionDropdown';
import DropItem from '@/components/Others/Dropdown/DropItem';
import MainMenu from '@/components/Discover/MainMenu/MainMenu';
import MainMenuItem from '@/components/Discover/MainMenu/MainMenuItem/MainMenuItem';
import SubMenuItem from '@/components/Discover/MainMenu/SubMenuItem/SubMenuItem';
import SubMenuContents from '@/components/Discover/MainMenu/SubMenuContents/SubMenuContents';
export default {
  title: 'Identity/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {
  args: {
    utilities: [
      <HeaderUtilityLink key="1">메뉴명</HeaderUtilityLink>,
      <HeaderUtilityDropdown id="utility-dropdown" dropItems={[<DropItem>메뉴명</DropItem>]}>
        메뉴명
      </HeaderUtilityDropdown>,
    ],
    actions: [
      <HeaderAction variant="login">로그인</HeaderAction>,
      <HeaderAction variant="join">회원가입</HeaderAction>,
      <HeaderActionDropdown
        id="myGov-dropdown"
        variant="myGov"
        dropItems={[
          <DropItem key={1}>나의 GOV</DropItem>,
          <DropItem key={2}>나의 신청내역</DropItem>,
          <DropItem key={3}>나의 생활정보</DropItem>,
          <DropItem key={4}>나의 정보관리</DropItem>,
        ]}
      >
        나의 GOV
      </HeaderActionDropdown>,
      <HeaderAction variant="all" aria-controls="mobile-nav">
        전체메뉴
      </HeaderAction>,
    ],
    children: (
      <MainMenu>
        <MainMenuItem title="메뉴 1번">
          <SubMenuItem
            title="2Depth-bar"
            subtitle="2Depth subtitle #1"
            link="#"
            bannerTitle="배너 타이틀 #1"
            bannerButton="배너 버튼 #1"
          >
            <SubMenuContents title="3Depth-title" />
          </SubMenuItem>
          <SubMenuItem
            variant="menu-description"
            title="2Depth-bar"
            subtitle="2Depth subtitle #2"
            link="#"
            bannerTitle="배너 타이틀 #2"
            bannerButton="배너 버튼 #2"
          >
            <SubMenuContents title="3Depth-title #1" description="3Depth subtitle #1" />
            <SubMenuContents title="3Depth-title #2" description="3Depth subtitle #2" />
            <SubMenuContents title="3Depth-title #3" description="3Depth subtitle #3" />
            <SubMenuContents title="3Depth-title #4" description="3Depth subtitle #4" />
            <SubMenuContents title="3Depth-title #5" description="3Depth subtitle #5" />
          </SubMenuItem>
          <SubMenuItem
            title="2Depth-bar"
            subtitle="2Depth subtitle #3"
            link="#"
            bannerTitle="배너 타이틀 #3"
            bannerButton="배너 버튼 #3"
          />
          <SubMenuItem variant="link" title="2Depth-bar" subtitle="2Depth subtitle #4" link="#" />
          <SubMenuItem variant="external-link" title="2Depth-bar" subtitle="2Depth subtitle #5" link="#" />
        </MainMenuItem>
      </MainMenu>
    ),
  },
};
