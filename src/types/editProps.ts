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

export interface TypeStatus extends BaseStatus {
  type: OptionsProps;
}

export function isOptionsStatus(status: BaseStatus): status is OptionsStatus {
  return 'options' in status;
}

export function isTypeStatus(status: BaseStatus): status is TypeStatus {
  return 'type' in status;
}

export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && status.every((item) => typeof item === 'string');
}

export function isValueStatusArray(status: OptionsStatusArr): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    status.every((item) => typeof item === 'object' && 'value' in item && 'status' in item)
  );
}

export function isPicTitleDescStatusArray(
  status: OptionsStatusArr,
): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    status.every(
      (item) =>
        typeof item === 'object' && 'picTitle' in item && 'picDesc' in item && 'value' in item,
    )
  );
}

export type PicLink = {
  link: string;
  index: number;
};

export function isPicLink(obj: object): obj is PicLink {
  return 'link' in obj && 'index' in obj;
}

export type GetLink = (obj: PicLink) => void;

export type UpdateStatus = (
  configKey: string,
  payload?: number | string | boolean | PicLink,
) => void;
