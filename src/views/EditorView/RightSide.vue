<template>
  <div class="right-side-container">
    <div
      v-if="store.currentFocusedComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题型进行编辑
    </div>
    <div v-else>
      <EditPanel :component="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import EditPanel from '@/components/Survey/EditPanel/Index.vue';
import { computed, provide } from 'vue';
import { isOptionsStatus, isPicLink, isTypeStatus, type PicLink } from '@/types';
import { ElMessage } from 'element-plus';

const store = useEditorStore();
const currentComponent = computed(() => store.components[store.currentFocusedComponentIndex]);

const updateStatus = (configKey: string, payload?: number | string | boolean | object) => {
  switch (configKey) {
    case 'type': {
      if (typeof payload === 'number' && isTypeStatus(currentComponent.value.status)) {
        store.toggleNoteType(currentComponent.value.status, payload);
      }
      break;
    }
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc".Expected string!');
        return;
      } else {
        store.setTextStatus(currentComponent.value.status[configKey], payload);
      }
      break;
    }
    case 'options': {
      if (!isOptionsStatus(currentComponent.value.status)) break;
      if (typeof payload === 'number') {
        const res = store.removeOption(currentComponent.value.status[configKey], payload);
        if (res) {
          ElMessage.success('删除成功');
        } else {
          ElMessage.error('至少保留两个选项');
        }
      } else if (typeof payload === 'object' && isPicLink(payload)) {
        store.setPicLinkByIndex(currentComponent.value.status[configKey], payload);
      } else {
        store.addOption(currentComponent.value.status[configKey]);
      }
      break;
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position".Expected number!');
        return;
      } else {
        store.setPosition(currentComponent.value.status[configKey], payload);
      }
      break;
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize".Expected number!');
        return;
      } else {
        store.setSize(currentComponent.value.status[configKey], payload);
      }
      break;
    }
  }
};
const getLink = (link: PicLink) => {
  console.log(link);
  updateStatus('options', link);
};
provide('updateStatus', updateStatus);
provide('getLink', getLink);
</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}
.content {
  height: 100%;
}
</style>
