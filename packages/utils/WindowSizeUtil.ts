const windowSize = {
  winSize: null as 'pc' | 'mob' | null,
  breakPoint: 1024,
  setWinSize() {
    this.winSize = window.innerWidth >= this.breakPoint ? 'pc' : 'mob';
  },
  getWinSize() {
    return this.winSize;
  },
};
