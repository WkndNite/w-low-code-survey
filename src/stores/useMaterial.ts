import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import { addOption, removeOption, setTextStatus } from './actions';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialComponent: 'single-select',
    components: {
      'single-select': defaultStatusMap['single-select'](),
    },
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
  },
});
