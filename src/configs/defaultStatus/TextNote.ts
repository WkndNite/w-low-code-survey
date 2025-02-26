// 备注说明的基础状态
// 单选题的 JSON Schema 配置

import Note from '@/components/Survey/Materials/Note/Note.vue';
import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import TitleEdit from '@/components/Survey/EditPanel/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditPanel/DescEdit.vue';
import PositionEdit from '@/components/Survey/EditPanel/PositionEdit.vue';
import SizeEdit from '@/components/Survey/EditPanel/SizeEdit.vue';
import ItalicEdit from '@/components/Survey/EditPanel/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditPanel/ColorEdit.vue';
import WeightEdit from '@/components/Survey/EditPanel/WeightEdit.vue';
import TextTypeEdit from '@/components/Survey/EditPanel/TextTypeEdit.vue';

export default function () {
  return {
    type: markRaw(Note),
    name: 'text-note',
    id: uuidv4(),
    status: {
      type: {
        id: uuidv4(),
        status: ['标题', '描述'],
        currentStatus: 1,
        isShow: true,
        name: 'text-type-edit',
        editComponent: markRaw(TextTypeEdit),
      },
      title: {
        id: uuidv4(),
        status: '备注说明默认标题',
        isShow: false,
        name: 'title-edit',
        editComponent: markRaw(TitleEdit),
      },
      desc: {
        id: uuidv4(),
        status: '备注说明默认描述',
        isShow: true,
        name: 'desc-edit',
        editComponent: markRaw(DescEdit),
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
