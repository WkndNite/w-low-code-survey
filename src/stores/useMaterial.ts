import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';
import {
  addOption,
  removeOption,
  setPicLinkByIndex,
  setPosition,
  setSize,
  setTextStatus,
  toggleNoteType,
} from './actions';
import { updateInitStatusBeforeAdd } from '@/utils';
import type { componentStatus, Material } from '@/types';

// 确定哪些业务预设组件需要做初始化工作
const keyToInitStatus = ['personal-info-gender', 'personal-info-education'] as Material[];
const initResult: { [key: string]: componentStatus } = {};
keyToInitStatus.forEach((key) => {
  const oldStatus = defaultStatusMap[key]();
  const newStatus = updateInitStatusBeforeAdd(oldStatus, key);
  initResult[key] = newStatus;
});

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialComponent: 'single-select',
    components: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
      'text-note': defaultStatusMap['text-note'](),
      'personal-info-gender': initResult['personal-info-gender'],
      'personal-info-education': initResult['personal-info-education'],
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
    toggleNoteType,
  },
});
