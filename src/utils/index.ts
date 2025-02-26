import { educationOptions, genderOptions } from '@/configs/defaultStatus/initStatus';
import {
  isOptionsStatus,
  isPicTitleDescStatusArray,
  isStringArray,
  type componentStatus,
  type Material,
  type OptionsProps,
  type TextProps,
} from '@/types';

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
