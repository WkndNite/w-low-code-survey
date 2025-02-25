import type { VueComponentType } from './common';

export interface BaseProps {
  id: string;
  isShow: boolean;
  name: string;
  editComponent: VueComponentType;
}

export type StringStatusArr = string[];
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export interface TextProps extends BaseProps {
  status: string;
}

export type OptionsStatusArr = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export interface OptionsProps extends BaseProps {
  status: OptionsStatusArr;
  currentStatus: number;
}

export interface BaseStatus {
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  titleSize: OptionsProps;
  descSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}

export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && status.every((item) => typeof item === 'string');
}
