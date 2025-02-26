// 题型面板对应的配置文件，用于配置题型面板的题型

import { ChatLineSquare, CircleCheck, User } from '@element-plus/icons-vue';

export const SurveyComponentList = [
  {
    title: '选择题',
    icon: CircleCheck,
    list: [
      { materialName: 'single-select', name: '单选题' },
      { materialName: 'single-pic-select', name: '图片单选题' },
    ],
  },
  {
    title: '备注说明',
    icon: ChatLineSquare,
    list: [{ materialName: 'text-note', name: '备注说明' }],
  },
  {
    title: '个人信息',
    icon: User,
    list: [
      { materialName: 'personal-info-gender', name: '性别' },
      { materialName: 'personal-info-education', name: '学历' },
    ],
  },
];
