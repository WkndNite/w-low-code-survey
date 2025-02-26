import SingleSelect from '@/components/Survey/Materials/Select/SingleSelect.vue';
import SinglePicSelect from '@/components/Survey/Materials/Select/SinglePicSelect.vue';
import Note from '@/components/Survey/Materials/Note/Note.vue';
import TitleEdit from '@/components/Survey/EditPanel/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditPanel/DescEdit.vue';
import PositionEdit from '@/components/Survey/EditPanel/PositionEdit.vue';
import SizeEdit from '@/components/Survey/EditPanel/SizeEdit.vue';
import ItalicEdit from '@/components/Survey/EditPanel/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditPanel/ColorEdit.vue';
import WeightEdit from '@/components/Survey/EditPanel/WeightEdit.vue';
import TextTypeEdit from '@/components/Survey/EditPanel/TextTypeEdit.vue';
import OptionsEdit from '@/components/Survey/EditPanel/OptionsEdit.vue';
import PicOptionsEdit from '@/components/Survey/EditPanel/PicOptionsEdit.vue';
import { markRaw } from 'vue';
import type { ComponentMap } from '@/types';

export const componentMap: ComponentMap = {
  'single-select': markRaw(SingleSelect),
  'single-pic-select': markRaw(SinglePicSelect),
  'text-note': markRaw(Note),
  'personal-info-gender': markRaw(SingleSelect),
  'personal-info-education': markRaw(SingleSelect),
  'title-edit': markRaw(TitleEdit),
  'desc-edit': markRaw(DescEdit),
  'position-edit': markRaw(PositionEdit),
  'size-edit': markRaw(SizeEdit),
  'italic-edit': markRaw(ItalicEdit),
  'color-edit': markRaw(ColorEdit),
  'weight-edit': markRaw(WeightEdit),
  'text-type-edit': markRaw(TextTypeEdit),
  'options-edit': markRaw(OptionsEdit),
  'pic-options-edit': markRaw(PicOptionsEdit),
};
