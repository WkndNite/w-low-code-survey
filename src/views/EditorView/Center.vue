<template>
  <div
    class="center-container"
    ref="centerContainer"
  >
    <draggable
      v-model="store.components"
      item-key="index"
      @start="startDragHandle"
    >
      <template #item="{ element, index }">
        <div
          class="content mb-10 relative"
          :class="{ active: store.currentFocusedComponentIndex === index }"
          @click="clickHandle(index)"
          :key="element.id"
          :ref="(el) => (componentsRefs[index] = el)"
        >
          <component
            :is="element.type"
            :status="element.status"
            :serialNum="serialNumber[index]"
          />
          <div
            class="absolute delete-btn"
            v-if="store.currentFocusedComponentIndex === index"
          >
            <el-button
              type="danger"
              size="small"
              class="ml-10"
              :icon="Close"
              circle
              @click="deleteComponent(index)"
            ></el-button>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { type ComponentPublicInstance, computed, nextTick, ref } from 'vue';
import EventBus from '@/utils/eventBus';
import draggable from 'vuedraggable';
import { useSerialNumber } from '@/utils/hooks';
import { Close } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';

const serialNumber = computed(() => useSerialNumber(store.components).value);

const store = useEditorStore();
const centerContainer = ref<HTMLElement | null>(null);
const componentsRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);

const scrollToBottom = () => {
  nextTick(() => {
    const el = centerContainer.value;
    if (el) {
      window.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};

const scrollComponentIntoView = (index: number) => {
  nextTick(() => {
    const el = componentsRefs.value[index];
    if (el instanceof HTMLElement) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  });
};

EventBus.on('scrollToBottom', scrollToBottom);
EventBus.on('scrollComponentIntoView', scrollComponentIntoView);

const clickHandle = (index: number) => {
  if (index === store.currentFocusedComponentIndex) {
    store.setCurrentFocusedComponentIndex(-1);
  } else {
    store.setCurrentFocusedComponentIndex(index);
  }
};

const startDragHandle = () => {
  store.setCurrentFocusedComponentIndex(-1);
};
const deleteComponent = (index: number) => {
  ElMessageBox.confirm('确定要删除吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      store.removeComponent(index);
      store.setCurrentFocusedComponentIndex(-1);
      ElMessage.success('删除成功');
    })
    .catch(() => {
      ElMessage.info('已取消删除');
    });
};
</script>

<style scope lang="scss">
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background-color: var(--white);
  position: relative;
  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);
    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}

.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.delete-btn {
  right: -5px;
  top: -10px;
}
</style>
