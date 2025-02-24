// 单选题的 JSON Schema 配置

import SingleSelect from '@/components/Survey/Materials/Select/SingleSelect.vue';
import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import TitleEdit from '@/components/Survey/EditPanel/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditPanel/DescEdit.vue';
import OptionsEdit from '@/components/Survey/EditPanel/OptionsEdit.vue';
import PositionEdit from '@/components/Survey/EditPanel/PositionEdit.vue';
import SizeEdit from '@/components/Survey/EditPanel/SizeEdit.vue';
import ItalicEdit from '@/components/Survey/EditPanel/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditPanel/ColorEdit.vue';
import WeightEdit from '@/components/Survey/EditPanel/WeightEdit.vue';

export default function () {
  return {
    type: markRaw(SingleSelect),
    name: 'single-select',
    id: uuidv4(),
    status: {
      title: {
        id: uuidv4(),
        status: '单选题默认标题',
        isShow: true,
        name: 'title-edit',
        editComponent: markRaw(TitleEdit),
      },
      desc: {
        id: uuidv4(),
        status: '单选题默认描述',
        isShow: true,
        name: 'desc-edit',
        editComponent: markRaw(DescEdit),
      },
      options: {
        id: uuidv4(),
        status: ['默认选项1', '默认选项2'],
        currentStatus: 0,
        isShow: true,
        name: 'option-edit',
        editComponent: markRaw(OptionsEdit),
      },
      position: {
        id: uuidv4(),
        status: ['左对齐', '居中'],
        currentStatus: 0,
        isShow: true,
        name: 'position-edit',
        editComponent: markRaw(PositionEdit),
      },
      titleSize: {
        id: uuidv4(),
        status: ['22', '20', '18'],
        currentStatus: 0,
        isShow: true,
        name: 'size-edit',
        editComponent: markRaw(SizeEdit),
      },
      descSize: {
        id: uuidv4(),
        status: ['16', '14', '12'],
        currentStatus: 0,
        isShow: true,
        name: 'size-edit',
        editComponent: markRaw(SizeEdit),
      },
      titleWeight: {
        id: uuidv4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-edit',
        editComponent: markRaw(WeightEdit),
      },
      descWeight: {
        id: uuidv4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-edit',
        editComponent: markRaw(WeightEdit),
      },
      titleItalic: {
        id: uuidv4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-edit',
        editComponent: markRaw(ItalicEdit),
      },
      descItalic: {
        id: uuidv4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-edit',
        editComponent: markRaw(ItalicEdit),
      },
      titleColor: {
        id: uuidv4(),
        status: '#000',
        isShow: true,
        name: 'color-edit',
        editComponent: markRaw(ColorEdit),
      },
      descColor: {
        id: uuidv4(),
        status: '#909399',
        isShow: true,
        name: 'color-edit',
        editComponent: markRaw(ColorEdit),
      },
    },
  };
}
