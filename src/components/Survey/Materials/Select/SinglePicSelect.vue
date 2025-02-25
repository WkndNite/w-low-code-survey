<template>
  <div
    :class="{
      'text-center': computedStatus.position,
    }"
  >
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedStatus.title"
      :desc="computedStatus.desc"
      :titleSize="computedStatus.titleSize"
      :descSize="computedStatus.descSize"
      :titleWeight="computedStatus.titleWeight"
      :descWeight="computedStatus.descWeight"
      :titleItalic="computedStatus.titleItalic"
      :descItalic="computedStatus.descItalic"
      :titleColor="computedStatus.titleColor"
      :descColor="computedStatus.descColor"
    />
  </div>
  <div class="flex wrap">
    <el-radio-group
      v-model="radioValue"
      class="flex wrap"
    >
      <el-radio
        v-for="(item, index) in computedStatus.options"
        :key="index"
        :value="item.picTitle"
        class="picOption flex mb-15"
      >
        <PicOption
          :key="index"
          v-bind="{ ...item, index }"
        />
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/Survey/Common/MaterialsHeader.vue';
import PicOption from '@/components/Survey/Common/PicOption.vue';
import type { OptionsStatus } from '@/types/editProps';
import {
  getCurrentStatus,
  getPicTitleDescStatusArr,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from '@/utils';
import { computed, ref } from 'vue';

const radioValue = ref('');

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedStatus = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getPicTitleDescStatusArr(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));
</script>

<style scoped lang="scss">
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
