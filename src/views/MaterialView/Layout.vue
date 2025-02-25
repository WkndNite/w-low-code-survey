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
          :status="store.components[store.currentMaterialComponent].status"
          :serialNum="1"
        />
      </RouterView>
    </div>
    <!-- 编辑面板 -->
    <div class="right">
      <EditPanel :component="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/useMaterial';
import { provide, computed } from 'vue';
import EditPanel from '@/components/Survey/EditPanel/Index.vue';
import { ElMessage } from 'element-plus';

const store = useMaterialStore();
const currentComponent = computed(() => store.components[store.currentMaterialComponent]);

const updateStatus = (configKey: string, payload?: number | string | boolean | object) => {
  console.log('updateStatus', configKey, payload);
  switch (configKey) {
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc".Expected string!');
      } else {
        store.setTextStatus(currentComponent.value.status[configKey], payload);
      }
    }
    case 'options': {
      if (typeof payload === 'number') {
        const res = store.removeOption(currentComponent.value.status[configKey], payload);
        if (res) {
          ElMessage.success('删除成功');
        } else {
          ElMessage.error('至少保留两个选项');
        }
      } else {
        store.addOption(currentComponent.value.status[configKey]);
      }
    }
  }
};
provide('updateStatus', updateStatus);
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
