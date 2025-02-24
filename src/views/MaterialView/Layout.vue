<template>
  <div class="layout-container flex">
    <!-- 选择对应的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <!-- 显示对应的业务组件 -->
    <div class="center">
      <RouterView v-slot="{ Component }">
        <Component
          :is="Component"
          :status="store.components[store.currentMateralComponent].status"
          :serialNum="1"
        />
      </RouterView>
    </div>
    <!-- 编辑面板 -->
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/useMaterial';
import { computed } from 'vue';
const store = useMaterialStore();
const currentComponent = computed(() => store.components[store.currentMateralComponent]);
</script>

<style scoped lang="scss">
.layout-container {
  // Header 50px
  // h1 50px
  // margin 20px * 2
  // 防止贴底 20px
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
}
.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}
.center {
  width: 550px;
  // padding 30px * 2
  // 防止贴底 20px
  height: calc(100vh - 100px - 60px - 20px);
  overflow-y: auto;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: auto;
  border-left: 1px solid var(--border-color);
}
</style>
