import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMateralComponent: 'single-select',
    components: {
      'single-select': defaultStatusMap['single-select'](),
    },
  }),
});
