import { componentMap } from '@/configs/componentMap';
import { educationOptions, genderOptions } from '@/configs/defaultStatus/initStatus';
import {
  isOptionsStatus,
  isPicTitleDescStatusArray,
  isStringArray,
  type componentStatus,
  type Material,
  type OptionsProps,
  type QuestionnaireDatabaseData,
  type TextProps,
} from '@/types';
import type { TableColumnCtx } from 'element-plus';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArray(props.status)) {
    return props.status;
  }
}

export function getCurrentStatus(props: OptionsProps) {
  if (props) {
    return props.currentStatus;
  }
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

export function updateInitStatusBeforeAdd(newStatus: componentStatus, newMaterialName: Material) {
  switch (newMaterialName) {
    case 'personal-info-gender':
      newStatus.name = 'personal-info-gender';
      newStatus.status.title.status = '您的性别是？';
      if (isOptionsStatus(newStatus.status)) {
        newStatus.status.options.status = genderOptions();
      }
      return newStatus;
    case 'personal-info-education':
      newStatus.name = 'personal-info-education';
      newStatus.status.title.status = '到目前为止,您的最高学历是？';
      if (isOptionsStatus(newStatus.status)) {
        newStatus.status.options.status = educationOptions();
      }
      return newStatus;
    default:
      return newStatus;
  }
}

export function formatDate(
  row: QuestionnaireDatabaseData,
  column: TableColumnCtx<QuestionnaireDatabaseData>,
  cellValue: number,
) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Intl.DateTimeFormat('zh-CN', options).format(new Date(cellValue));
}

export const restoreComponentStatus = (components: componentStatus[]) => {
  components.forEach((com) => {
    com.type = componentMap[com.name];
    for (const key in com.status) {
      const name = com.status[key].name;
      com.status[key].editCom = componentMap[name];
    }
  });
};
