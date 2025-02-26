<template>
  <div class="left-side-container flex">
    <div class="tabs">
      <div
        class="tab-item"
        :class="{ 'tab-show': routeName === 'survey-type' }"
        @click="goToSurveyType"
      >
        <el-icon>
          <Memo />
        </el-icon>
        <span class="tab-item-title mt-5"> 题型 </span>
      </div>
      <div
        class="tab-item"
        :class="{ 'tab-show': routeName === 'outline' }"
        @click="goToOutline"
      >
        <el-icon>
          <Document />
        </el-icon>
        <span class="tab-item-title mt-5"> 大纲 </span>
      </div>
    </div>
    <RouterView class="tab-panel" />
  </div>
</template>

<script setup lang="ts">
import { Document, Memo } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const routeName = computed(() => route.name);

const goToSurveyType = () => {
  router.push({ name: 'survey-type' });
};
const goToOutline = () => {
  router.push({ name: 'outline' });
};
</script>

<style scoped lang="scss">
.left-side-container {
  width: 300px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  top: 70px;
  left: 20px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  > .tabs {
    width: 20%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    > .tab-item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--font-color-light);
      text-decoration: none;
      cursor: pointer;
      > .tab-item-title {
        font-size: var(--font-size-base);
      }
    }
    > .tab-show {
      color: var(--primary-color);
    }
  }
  > .tab-panel {
    width: 80%;
    height: calc(100% - 50px);
    padding: 25px;
    overflow-y: scroll;
  }
}
</style>
