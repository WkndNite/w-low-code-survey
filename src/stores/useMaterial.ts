import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import {
  addOption,
  removeOption,
  setPicLinkByIndex,
  setPosition,
  setSize,
  setTextStatus,
} from './actions';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialComponent: 'single-select',
    components: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
    },
  }),
  actions: {
    setCurrentMaterialComponent(component: string) {
      this.currentMaterialComponent = component;
    },
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setPicLinkByIndex,
  },
});
