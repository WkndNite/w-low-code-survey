import {
  isPicTitleDescStatusArray,
  isStringArray,
  type OptionsProps,
  type PicLink,
  type TextProps,
  type TypeStatus,
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

export function toggleNoteType(status: TypeStatus, type: number) {
  if (type !== status.type.currentStatus) {
    status.type.currentStatus = type;
    status.title.isShow = !status.title.isShow;
    status.desc.isShow = !status.desc.isShow;
    status.position.isShow = !status.position.isShow;
    status.titleSize.isShow = !status.titleSize.isShow;
    status.descSize.isShow = !status.descSize.isShow;
    status.titleWeight.isShow = !status.titleWeight.isShow;
    status.descWeight.isShow = !status.descWeight.isShow;
    status.titleItalic.isShow = !status.titleItalic.isShow;
    status.descItalic.isShow = !status.descItalic.isShow;
    status.titleColor.isShow = !status.titleColor.isShow;
    status.descColor.isShow = !status.descColor.isShow;
  }
}
