import { defineStore } from 'pinia';

import {
  addOption,
  removeOption,
  setPicLinkByIndex,
  setPosition,
  setSize,
  setTextStatus,
  toggleNoteType,
} from './actions';
import { isQuestionsComponent, type componentStatus } from '@/types';

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    currentFocusedComponentIndex: -1, // 当前选中的组件索引
    questionsCount: 0, // 问卷题目的数量
    components: [] as componentStatus[], // 问卷题目的数组
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setPicLinkByIndex,
    toggleNoteType,
    addComponent(newComponent: componentStatus) {
      this.components.push(newComponent);
      this.currentFocusedComponentIndex = -1;
      if (isQuestionsComponent(newComponent.name)) {
        this.questionsCount++;
      }
    },
    setCurrentFocusedComponentIndex(index: number) {
      this.currentFocusedComponentIndex = index;
    },
    removeComponent(index: number) {
      if (isQuestionsComponent(this.components[index].name)) {
        this.questionsCount--;
      }
      this.components.splice(index, 1);
    },
  },
});
