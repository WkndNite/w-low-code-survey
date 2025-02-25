<template>
  <div>
    <ButtonGroup
      :title="`${configKey === 'titleSize' ? '标题' : '描述'}尺寸`"
      :status="status[currentStatus]"
    >
      <el-button-group>
        <el-button
          :class="{
            select: currentStatus === 0,
          }"
          @click="changeSize(0)"
        >
          <font-awesome-icon
            icon="font"
            size="lg"
          />
        </el-button>
        <el-button
          :class="{ select: currentStatus === 1 }"
          @click="changeSize(1)"
        >
          <font-awesome-icon
            icon="font"
            size="sm"
          />
        </el-button>
        <el-button
          :class="{ select: currentStatus === 2 }"
          @click="changeSize(2)"
        >
          <font-awesome-icon
            icon="font"
            size="xs"
          />
        </el-button>
      </el-button-group>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import type { VueComponentType } from '@/types';
import { inject } from 'vue';

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
}>();

const updateStatus = inject('updateStatus');
const changeSize = (size: number) => {
  updateStatus(props.configKey, size);
};
</script>

<style lang="scss" scoped></style>
