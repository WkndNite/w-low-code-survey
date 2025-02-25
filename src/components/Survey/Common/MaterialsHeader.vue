<template>
  <div class="container mb-15">
    <h2
      class="title font-weight-100"
      :style="{
        fontSize: `${props.titleSize}px`,
        color: props.titleColor,
      }"
    >
      <span class="mr-10">{{ props.serialNum }}</span>
      <span
        :class="{
          'font-bold': !props.titleWeight,
          'font-italic': !props.titleItalic,
        }"
        >{{ props.title }}</span
      >
    </h2>
    <div
      class="desc"
      :class="{
        'font-bold': !props.descWeight,
        'font-italic': !props.descItalic,
      }"
      :style="{ fontSize: `${props.descSize}px`, color: props.descColor }"
    >
      {{ props.desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  serialNum: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  titleSize: {
    type: String,
    default: '22',
  },
  descSize: {
    type: String,
    default: '16',
  },
  titleWeight: {
    type: Number,
    default: 0,
  },
  descWeight: {
    type: Number,
    default: 0,
  },
  titleItalic: {
    type: Number,
    default: 0,
  },
  descItalic: {
    type: Number,
    default: 0,
  },
  titleColor: {
    type: String,
    default: '#000',
  },
  descColor: {
    type: String,
    default: '#909399',
  },
});
</script>

<style scoped>
.container {
  > h2 {
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }
}
.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  text-indent: 5px;
}
</style>
