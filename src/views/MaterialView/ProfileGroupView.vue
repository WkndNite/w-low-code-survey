<template>
  <div>
    <Layout>
      <Router-link class="link-item mb-15">姓名</Router-link>
      <Router-link class="link-item mb-15">身份证</Router-link>
      <Router-link class="link-item mb-15">出生日期</Router-link>
      <Router-link
        class="link-item mb-15"
        to="/personal-info-gender"
        >性别</Router-link
      >
      <Router-link class="link-item mb-15">年龄</Router-link>
      <Router-link
        class="link-item mb-15"
        to="/personal-info-education"
        >学历</Router-link
      >
      <Router-link class="link-item mb-15">大学</Router-link>
      <Router-link class="link-item mb-15">专业</Router-link>
      <Router-link class="link-item mb-15">行业</Router-link>
      <Router-link class="link-item mb-15">职业</Router-link>
      <Router-link class="link-item mb-15">公司</Router-link>
      <Router-link class="link-item mb-15">单位</Router-link>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<style scoped></style>
