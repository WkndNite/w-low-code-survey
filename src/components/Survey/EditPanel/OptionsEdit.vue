<template>
  <div key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">选项</div>
      <el-button
        size="small"
        :icon="Plus"
        @click="addOptionHandle"
        circle
      />
    </div>
    <div
      v-for="(item, index) in textArr"
      :key="index"
      class="flex align-items-center"
    >
      <el-input
        placeholder="选项"
        class="mt-5 mb-5"
        v-model="textArr[index]"
      />
      <el-button
        type="danger"
        size="small"
        :icon="Minus"
        class="ml-10"
        @click="removeOption(index)"
      ></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue';
import { ref, inject } from 'vue';
import type { UpdateStatus, VueComponentType } from '@/types';
const props = defineProps<{
  status: Array<string>;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();
const updateStatus = inject<UpdateStatus>('updateStatus');
const addOptionHandle = () => {
  if (updateStatus) {
    updateStatus(props.configKey);
  }
};

const textArr = ref(props.status);

const removeOption = (index: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, index);
  }
};
</script>

<style lang="scss" scoped></style>
