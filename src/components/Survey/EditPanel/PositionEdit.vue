<template>
  <ButtonGroup
    title="居中设置"
    :status="status[currentStatus]"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changePosition(0)"
      >
        <font-awesome-icon icon="align-left" />
      </el-button>
      <el-button
        :class="{ select: currentStatus === 1 }"
        @click="changePosition(1)"
      >
        <font-awesome-icon icon="align-center" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import type { UpdateStatus, VueComponentType } from '@/types';
import { inject } from 'vue';

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
}>();
const updateStatus = inject<UpdateStatus>('updateStatus');

const changePosition = (position: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, position);
  }
};
</script>

<style lang="scss" scoped></style>
