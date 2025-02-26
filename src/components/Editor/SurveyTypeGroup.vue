<template>
  <div class="mc survey-component-group-container">
    <div class="mb-20">
      <div class="group-title font-weight-500 mb-15 flex align-items-center">
        <el-icon>
          <component :is="icon" />
        </el-icon>
        <div class="ml-5 title">{{ title }}</div>
      </div>
      <div class="flex wrap space-between">
        <SurveyTypeItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SurveyTypeItem from './SurveyTypeItem.vue';
defineProps(['title', 'icon', 'list']);
</script>

<style scoped>
.survey-component-group-container {
  width: 90%;
}
.title {
  font-size: var(--font-size-base);
  position: relative;
  bottom: 1px;
}
</style>
