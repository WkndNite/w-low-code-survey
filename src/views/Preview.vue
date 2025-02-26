<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <div class="button-group flex space-between align-items-center">
        <div class="flex space-between">
          <el-button type="danger">返回</el-button>
          <el-button type="success">生成在线问卷</el-button>
          <el-button type="warning">生成本地PDF</el-button>
        </div>
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.questionsCount }}</el-text>
        </div>
      </div>
      <div class="content-group no-border"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getQuestionnaireById } from '@/db/operation';
import { restoreComponentStatus } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';

const store = useEditorStore();

const route = useRoute();

const questionnaireId = Number(route.params.id);
if (questionnaireId) {
  getQuestionnaireById(questionnaireId).then((res) => {
    console.log('res ===> ', res);

    if (res) {
      // 组件还原
      restoreComponentStatus(res.components);
      store.setStore(res);
    }
  });
}
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/imgs/editor_background.png');
}
.center {
  width: 800px;
}
.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}
.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-ls);
  background-color: var(--white);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
}
</style>
