<template>
  <div>
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <LeftSide />
      <RightSide />
    </div>
    <div>
      <Center />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Common/Header.vue';
import LeftSide from './LeftSide/Index.vue';
import RightSide from './RightSide.vue';
import Center from './Center.vue';
import { useEditorStore } from '@/stores/useEditor';

const store = useEditorStore();
</script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  width: calc(100% - 40px);
  padding: 20px;
  /* Header 50px padding 20px * 2 */
  height: calc(100vh - 50px - 40px);
  background-image: url('@/assets/img/editor_background.png');

  position: fixed;
  top: 50px;
}
</style>
