import type { Meta, StoryObj } from '@storybook/react';

import MainMenuMobile from './MainMenuMobile';
import HeaderUtility from '@/components/Identity/Header/HeaderUtility/HeaderUtility';
import SubMenuItemMobile from './SubMenuItemMobile/SubMenuItemMobile';
import Depth3MenuItemMobile from './Depth3MenuItemMobile/Depth3MenuItemMobile';
import Depth4MenuItemMobile from './Depth4MenuItemMobile/Depth4MenuItemMobile';
import SubMenuGroupMobile from './SubMenuGroupMobile/SubMenuGroupMobile';
import MainMenuItemMobile from './MainMenuItemMobile/MainMenuItemMobile';
import Link from '@/components/Action/Link/Link';

export default {
  title: 'Discover/MainMenuMobile',
  component: MainMenuMobile,
} as Meta;

type Story = StoryObj<typeof MainMenuMobile>;
export const Primary: Story = {
  args: {
    utilities: [
      <HeaderUtility key="1" className="xsmall">
        메뉴명
      </HeaderUtility>,
      <HeaderUtility key="2" className="xsmall">
        메뉴명
      </HeaderUtility>,
    ],
    mainMenuItems: [
      <MainMenuItemMobile key="1" href="#mGnb-anchor1">
        1Depth
      </MainMenuItemMobile>,
      <MainMenuItemMobile key="2" href="#mGnb-anchor2">
        2Depth
      </MainMenuItemMobile>,
      <MainMenuItemMobile key="3" href="#mGnb-anchor3">
        3Depth
      </MainMenuItemMobile>,
    ],
    subMenuGroups: [
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
      </SubMenuGroupMobile>,
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
      </SubMenuGroupMobile>,
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
      </SubMenuGroupMobile>,
    ],
    bottomLinks: [
      <Link key="1" href="#" icon="angle right" size="small" colored={false}>
        메뉴명
      </Link>,
      <Link key="2" href="#" icon="go" size="small" target="_blank" title="새 창 열기" colored={false}>
        메뉴명
      </Link>,
    ],
  },
};
