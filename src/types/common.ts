import type { defineComponent } from 'vue';
import type { OptionsStatus, TypeStatus } from './editProps';

export type VueComponentType = ReturnType<typeof defineComponent>;

export interface componentStatus {
  type: VueComponentType;
  name: string;
  id: string;
  status: OptionsStatus | TypeStatus;
}
