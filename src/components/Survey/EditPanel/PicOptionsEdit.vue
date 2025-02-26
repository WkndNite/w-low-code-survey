<template>
  <div>
    <div class="flex align-items-center">
      <div class="mr-10">题目选项</div>
      <el-button
        size="small"
        :icon="Plus"
        circle
        @click="addOptionHandle"
      />
    </div>

    <div
      v-for="(item, index) in textArr"
      :key="index"
    >
      <div class="title mt-10 mb-10 flex align-items-center">
        <span>选项{{ index + 1 }}</span>
        <el-button
          type="danger"
          size="small"
          :icon="Minus"
          class="ml-5 delete"
          circle
          @click="removeOption(index)"
        />
      </div>
      <div class="mb-5">
        <div
          v-if="item.value"
          class="flex"
        >
          <span class="title mr-5">已上传图片</span>
          <el-link
            @click="deletePic(index)"
            type="primary"
            >删除图片</el-link
          >
        </div>
        <div
          v-else
          class="title"
        >
          <span>未上传图片</span>
        </div>
      </div>
      <el-input
        class="mb-5"
        v-model="item.picTitle"
        placeholder="图片标题"
      />
      <el-input
        type="textarea"
        :rows="3"
        placeholder="图片描述"
        v-model="item.picDesc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PicTitleDescStatusArr, UpdateStatus, VueComponentType } from '@/types';
import { Plus, Minus } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref, inject } from 'vue';

const props = defineProps<{
  currentStatus: number;
  status: PicTitleDescStatusArr;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();

const textArr = ref(props.status);

const updateStatus = inject<UpdateStatus>('updateStatus');

const addOptionHandle = () => {
  if (updateStatus) {
    updateStatus(props.configKey);
  }
};

const removeOption = (index: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, index);
  }
};

const deletePic = (index: number) => {
  ElMessageBox.confirm('确定删除图片吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      if (updateStatus) {
        updateStatus(props.configKey, { index, link: '' });
      }
    })
    .catch(() => {
      ElMessage.info('已取消删除');
    });
};
</script>

<style lang="scss" scoped>
.title {
  color: var(--font-color-light);
  font-size: var(--font-size-base);
}
.delete {
  transform: scale(0.8);
}
</style>
