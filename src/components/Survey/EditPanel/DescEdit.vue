<template>
  <div key="id">
    <div class="mb-10">
      <div class="mb-10">描述内容</div>
      <el-input
        placeholder="请输入描述内容"
        v-model="text"
        type="textarea"
        @update:modelValue="inputHandle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { UpdateStatus, VueComponentType } from '@/types';

const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();

const text = ref(props.status);
const updateStatus = inject<UpdateStatus>('updateStatus');

const inputHandle = (val: string) => {
  if (updateStatus) {
    updateStatus(props.configKey, val);
  }
};
</script>
