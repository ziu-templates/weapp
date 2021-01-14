import { updateApp } from 'miniapp-utils';

export default {
  onLaunch() {
  },
  onShow() {
    updateApp();
  },
  onError(msg) {
    console.log(msg, ' -----> onError');
  },
  globalData: {
    initData: null,
  },
};
