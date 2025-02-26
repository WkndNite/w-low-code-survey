import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
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
import textNoteDefaultStatus from '@/configs/defaultStatus/TextNote';
import TitleEdit from '@/components/Survey/EditPanel/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditPanel/DescEdit.vue';
import PositionEdit from '@/components/Survey/EditPanel/PositionEdit.vue';
import SizeEdit from '@/components/Survey/EditPanel/SizeEdit.vue';
import ItalicEdit from '@/components/Survey/EditPanel/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditPanel/ColorEdit.vue';
import WeightEdit from '@/components/Survey/EditPanel/WeightEdit.vue';
import TextTypeEdit from '@/components/Survey/EditPanel/TextTypeEdit.vue';

import type { QuestionnaireDatabaseData, TypeStatus } from '@/types';
import { saveQuestionnaire } from '@/db/operation';

const initStore = () =>
  [
    Object.assign({}, textNoteDefaultStatus(), {
      status: <TypeStatus>{
        type: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['标题', '段落'],
          isShow: true,
          editComponent: markRaw(TextTypeEdit),
          name: 'text-type-editor',
        },
        title: {
          id: uuidv4(),
          status: '问卷标题',
          isShow: true,
          editComponent: markRaw(TitleEdit),
          name: 'title-editor',
        },
        desc: {
          id: uuidv4(),
          status: '默认描述内容',
          isShow: false,
          editComponent: DescEdit,
          name: 'desc-editor',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: false,
          editComponent: markRaw(PositionEdit),
          name: 'position-editor',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: true,
          editComponent: markRaw(SizeEdit),
          name: 'size-editor',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: false,
          editComponent: markRaw(SizeEdit),
          name: 'size-editor',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editComponent: markRaw(WeightEdit),
          name: 'weight-editor',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editComponent: markRaw(WeightEdit),
          name: 'weight-editor',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editComponent: markRaw(ItalicEdit),
          name: 'italic-editor',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editComponent: markRaw(ItalicEdit),
          name: 'italic-editor',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: true,
          editComponent: markRaw(ColorEdit),
          name: 'color-editor',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: false,
          editComponent: markRaw(ColorEdit),
          name: 'color-editor',
        },
      },
    }),
    Object.assign({}, textNoteDefaultStatus(), {
      status: <TypeStatus>{
        type: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['标题', '段落'],
          isShow: true,
          editComponent: markRaw(TextTypeEdit),
          name: 'text-type-editor',
        },
        title: {
          id: uuidv4(),
          status: '默认标题内容',
          isShow: false,
          editComponent: markRaw(TitleEdit),
          name: 'title-editor',
        },
        desc: {
          id: uuidv4(),
          status:
            '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
          isShow: true,
          editComponent: markRaw(DescEdit),
          name: 'desc-editor',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: true,
          editComponent: markRaw(PositionEdit),
          name: 'position-editor',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: false,
          editComponent: markRaw(SizeEdit),
          name: 'size-editor',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: true,
          editComponent: markRaw(SizeEdit),
          name: 'size-editor',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editComponent: markRaw(WeightEdit),
          name: 'weight-editor',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editComponent: markRaw(WeightEdit),
          name: 'weight-editor',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editComponent: markRaw(ItalicEdit),
          name: 'italic-editor',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editComponent: markRaw(ItalicEdit),
          name: 'italic-editor',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: false,
          editComponent: markRaw(ColorEdit),
          name: 'color-editor',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: true,
          editComponent: markRaw(ColorEdit),
          name: 'color-editor',
        },
      },
    }),
  ] as unknown as componentStatus[];

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    currentFocusedComponentIndex: -1, // 当前选中的组件索引
    questionsCount: 0, // 问卷题目的数量
    components: initStore() as componentStatus[], // 问卷题目的数组
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
    resetComponents() {
      this.components = initStore() as componentStatus[];
      this.currentFocusedComponentIndex = -1;
      this.questionsCount = 0;
    },
    saveQuestionnaire(questionnaire: QuestionnaireDatabaseData) {
      return saveQuestionnaire(questionnaire);
    },
    setStore(data: QuestionnaireDatabaseData) {
      this.components = data.components;
      this.questionsCount = data.questionsCount;
      this.currentFocusedComponentIndex = -1;
    },
  },
});
