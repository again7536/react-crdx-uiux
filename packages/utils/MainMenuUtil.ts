const getMainMenuUniqueId = () => {
  return `gnb-main-menu-${Math.random().toString(36).substring(2, 15)}`;
};

const getSubMenuUniqueId = () => {
  return `gnb-sub-menu-${Math.random().toString(36).substring(2, 15)}`;
};

export { getMainMenuUniqueId, getSubMenuUniqueId };
