import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import HeaderUtility from './HeaderUtility/HeaderUtility';
import HeaderUtilityDropdown from './HeaderUtility/HeaderUtilityDropdown';
import HeaderAction from './HeaderAction/HeaderAction';
import HeaderActionDropdown from './HeaderAction/HeaderActionDropdown';
import DropItem from '@/components/Others/Dropdown/DropItem';
import MainMenu from '@/components/Discover/MainMenu/MainMenu';
import MainMenuItem from '@/components/Discover/MainMenu/MainMenuItem/MainMenuItem';
import SubMenuItem from '@/components/Discover/MainMenu/SubMenuItem/SubMenuItem';
import SubMenuContents from '@/components/Discover/MainMenu/SubMenuContents/SubMenuContents';
import MainMenuMobile from '@/components/Discover/MainMenuMobile/MainMenuMobile';
import MainMenuItemMobile from '@/components/Discover/MainMenuMobile/MainMenuItemMobile/MainMenuItemMobile';
import SubMenuGroupMobile from '@/components/Discover/MainMenuMobile/SubMenuGroupMobile/SubMenuGroupMobile';
import SubMenuItemMobile from '@/components/Discover/MainMenuMobile/SubMenuItemMobile/SubMenuItemMobile';
import Depth3MenuItemMobile from '@/components/Discover/MainMenuMobile/Depth3MenuItemMobile/Depth3MenuItemMobile';
import Depth4MenuItemMobile from '@/components/Discover/MainMenuMobile/Depth4MenuItemMobile/Depth4MenuItemMobile';

export default {
  title: 'Identity/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {
  args: {
    utilities: [
      <HeaderUtility key="1">메뉴명</HeaderUtility>,
      <HeaderUtilityDropdown key="2" id="utility-dropdown" dropItems={[<DropItem>메뉴명</DropItem>]}>
        메뉴명
      </HeaderUtilityDropdown>,
    ],
    actions: [
      <HeaderAction key="1" variant="login">
        로그인
      </HeaderAction>,
      <HeaderAction key="2" variant="join">
        회원가입
      </HeaderAction>,
      <HeaderActionDropdown
        key="3"
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
    ],
    children: (
      <>
        <MainMenu>
          <MainMenuItem title="메뉴 1번">
            <SubMenuItem
              variant="menu"
              title="2Depth-bar"
              subtitle="2Depth subtitle #1"
              link="#"
              bannerTitle="배너 타이틀 #1"
              bannerButton="배너 버튼 #1"
            >
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
              <SubMenuContents title="3Depth-title" />
            </SubMenuItem>
            <SubMenuItem
              variant="menu-description"
              title="2Depth-bar"
              subtitle="2Depth subtitle #2"
              link="#"
              bannerTitle="배너 타이틀 #2"
              bannerButton="배너 버튼 #2"
              bannerPosition="right"
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
        <MainMenuMobile>
          <MainMenuItemMobile href="#mGnb-anchor1" title="1Depth">
            <SubMenuGroupMobile id="mGnb-anchor1" title="1Depth">
              <SubMenuItemMobile title="2Depth">
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth">
                  <Depth4MenuItemMobile>4Depth</Depth4MenuItemMobile>
                </Depth3MenuItemMobile>
              </SubMenuItemMobile>
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
            </SubMenuGroupMobile>
          </MainMenuItemMobile>
          <MainMenuItemMobile href="#mGnb-anchor2" title="2Depth">
            <SubMenuGroupMobile id="mGnb-anchor2" title="1Depth">
              <SubMenuItemMobile title="2Depth">
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth">
                  <Depth4MenuItemMobile>4Depth</Depth4MenuItemMobile>
                </Depth3MenuItemMobile>
              </SubMenuItemMobile>
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
            </SubMenuGroupMobile>
          </MainMenuItemMobile>
          <MainMenuItemMobile href="#mGnb-anchor3" title="3Depth">
            <SubMenuGroupMobile id="mGnb-anchor3" title="1Depth">
              <SubMenuItemMobile title="2Depth">
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth" />
                <Depth3MenuItemMobile title="3Depth">
                  <Depth4MenuItemMobile>4Depth</Depth4MenuItemMobile>
                </Depth3MenuItemMobile>
              </SubMenuItemMobile>
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
              <SubMenuItemMobile title="2Depth" />
            </SubMenuGroupMobile>
          </MainMenuItemMobile>
        </MainMenuMobile>
      </>
    ),
  },
};
