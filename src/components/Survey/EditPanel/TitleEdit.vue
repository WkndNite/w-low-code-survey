<template>
  <div key="id">
    <div class="mb-10">
      <div class="mb-10">标题内容</div>
      <el-input
        placeholder="请输入标题内容"
        v-model="text"
        @update:modelValue="inputHandle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, inject } from 'vue';
import type { VueComponentType } from '@/types';

const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();

const text = ref(props.status);

const inputHandle = (val: string) => {
  updateStatus(props.configKey, val);
};

const updateStatus = inject('updateStatus');
</script>
