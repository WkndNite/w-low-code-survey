import { Plus } from '@element-plus/icons-vue'; import { ref } from 'vue';
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
      v-for="(item, index) in status"
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
import type { VueComponentType } from '@/types';
const props = defineProps<{
  status: Array<string>;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();
const updateStatus = inject('updateStatus');
const addOptionHandle = () => {
  updateStatus(props.configKey);
};

const textArr = ref(props.status);

const removeOption = (index: number) => {
  updateStatus(props.configKey, index);
};
</script>

<style lang="scss" scoped></style>
