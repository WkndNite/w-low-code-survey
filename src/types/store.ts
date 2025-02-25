import type { OptionsProps, PicLink, TextProps, TypeStatus, componentStatus } from '@/types';

export type SurveyComponentName = 'single-select' | 'single-pic-select';

export type Material = SurveyComponentName | 'text-note';

export interface Actions {
  setTextStatus: (textProps: TextProps, text: string) => void;
  addOption: (optionProps: OptionsProps) => void;
  removeOption: (optionProps: OptionsProps, index: number) => boolean;
  setPosition: (optionProps: OptionsProps, index: number) => void;
  setSize: (optionProps: OptionsProps, index: number) => void;
  setPicLinkByIndex: (optionProps: OptionsProps, payload: PicLink) => void;
  toggleNoteType: (status: TypeStatus, type: number) => void;
}

export interface MaterialStore extends Actions {
  currentMaterialComponent: Material;
  components: Record<Material, componentStatus>;
  setCurrentSurveyComponent: (component: Material) => void;
}
