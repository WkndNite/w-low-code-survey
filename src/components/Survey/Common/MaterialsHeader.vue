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
interface Props {
  serialNum: number;
  title?: string;
  desc?: string;
  titleSize?: string;
  descSize?: string;
  titleWeight?: number;
  descWeight?: number;
  titleItalic?: number;
  descItalic?: number;
  titleColor?: string;
  descColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  desc: '',
  titleSize: '22',
  descSize: '16',
  titleWeight: 0,
  descWeight: 0,
  titleItalic: 0,
  descItalic: 0,
  titleColor: '#000',
  descColor: '#909399',
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
