import {
  isPicTitleDescStatusArray,
  isStringArray,
  type OptionsProps,
  type PicLink,
  type TextProps,
} from '@/types';
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

export function addOption(optionProps: OptionsProps) {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新增选项');
  } else if (isPicTitleDescStatusArray(optionProps.status)) {
    optionProps.status.push({
      picTitle: '新增选项图片标题',
      picDesc: '新增选项图片描述',
      value: '',
    });
  }
}

export function removeOption(optionProps: OptionsProps, index: number) {
  if (optionProps.status.length <= 2) {
    return false;
  }
  optionProps.status.splice(index, 1);
  return true;
}

export function setPosition(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setSize(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setPicLinkByIndex(optionProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescStatusArray(optionProps.status)) {
    optionProps.status[payload.index].value = payload.link;
  }
}
