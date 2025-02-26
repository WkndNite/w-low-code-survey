<template>
  <div v-if="store.questionsCount">
    <draggable
      v-model="store.components"
      item-key="index"
      @start="startDragHandle"
    >
      <template #item="{ element, index }">
        <div
          class="mb-10"
          v-if="serialNumber[index]"
          @click="clickHandle(index)"
          :class="{
            active: store.currentFocusedComponentIndex === index,
          }"
        >
          <div class="item">
            {{ serialNumber[index] }}.
            {{
              element.status.title.status.length > 10
                ? element.status.title.status.substring(0, 10) + '...'
                : element.status.title.status
            }}
          </div>
        </div>
      </template>
    </draggable>
  </div>
  <div
    v-else
    class="tip flex align-items-center justify-content-center"
  >
    请添加题目
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import draggable from 'vuedraggable';
import { useSerialNumber } from '@/utils/hooks';
import { computed } from 'vue';
import EventBus from '@/utils/eventBus';

const serialNumber = computed(() => useSerialNumber(store.components).value);
const store = useEditorStore();

const startDragHandle = () => {
  store.setCurrentFocusedComponentIndex(-1);
};

const clickHandle = (index: number) => {
  if (store.currentFocusedComponentIndex === index) {
    store.setCurrentFocusedComponentIndex(-1);
  } else {
    store.setCurrentFocusedComponentIndex(index);
    EventBus.emit('scrollComponentIntoView', index);
  }
};
</script>

<style scoped>
.item {
  color: var(--font-color-light);
  font-size: var(--font-size-base);
  padding: 10px;
  cursor: pointer;
}
.tip {
  height: calc(100% - 50px);
}
.active {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: var(--border-color);
  border-radius: var(--border-radius-lg);
}
</style>
