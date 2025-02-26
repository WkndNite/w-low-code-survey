<template>
  <div class="survey-type-container">
    <SurveyTypeGroup
      v-for="(item, index) in SurveyComponentList"
      :key="index"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
import { SurveyComponentList } from '@/configs/SurveyType';
import SurveyTypeGroup from '@/components/Editor/SurveyTypeGroup.vue';
</script>

<style scoped>
.survey-type-container {
  height: calc(100vh - 50px - 40px);
}
</style>
