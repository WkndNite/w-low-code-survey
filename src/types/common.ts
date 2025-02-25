import type { defineComponent } from 'vue';
import type { OptionsProps } from './editProps';

export type VueComponentType = ReturnType<typeof defineComponent>;

export interface componentStatus {
  type: VueComponentType;
  name: string;
  id: string;
  status: OptionsProps;
}
