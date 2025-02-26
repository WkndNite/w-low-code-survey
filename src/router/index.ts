import HomeView from '@/views/Index.vue';

import { useMaterialStore } from '@/stores/useMaterial';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('@/views/MaterialView/Index.vue'),
      redirect: '/select-group',
      children: [
        {
          path: '/select-group',
          name: 'select-group',
          component: () => import('@/views/MaterialView/SelectGroupView.vue'),
          redirect: '/single-select',
          children: [
            {
              path: '/single-select',
              name: 'single-select',
              component: () => import('@/components/Survey/Materials/Select/SingleSelect.vue'),
            },
            {
              path: '/multi-select',
              name: 'multi-select',
              component: () => import('@/components/Survey/Materials/Select/MultiSelect.vue'),
            },
            {
              path: '/option-select',
              name: 'option-select',
              component: () => import('@/components/Survey/Materials/Select/OptionSelect.vue'),
            },
            {
              path: '/single-pic-select',
              name: 'single-pic-select',
              component: () => import('@/components/Survey/Materials/Select/SinglePicSelect.vue'),
            },
            {
              path: '/multi-pic-select',
              name: 'multi-pic-select',
              component: () => import('@/components/Survey/Materials/Select/MultiPicSelect.vue'),
            },
          ],
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/views/MaterialView/InputGroupView.vue'),
        },
        {
          path: '/advanced-group',
          name: 'advanced-group',
          component: () => import('@/views/MaterialView/AdvancedGroupView.vue'),
        },
        {
          path: '/note-group',
          name: 'note-group',
          component: () => import('@/views/MaterialView/NoteGroupView.vue'),
          redirect: '/text-note',
          children: [
            {
              path: '/text-note',
              name: 'text-note',
              component: () => import('@/components/Survey/Materials/Note/Note.vue'),
            },
          ],
        },
        {
          path: '/profile-group',
          name: 'profile-group',
          component: () => import('@/views/MaterialView/ProfileGroupView.vue'),
          redirect: '/personal-info-gender',
          children: [
            {
              path: '/personal-info-gender',
              name: 'personal-info-gender',
              component: () => import('@/components/Survey/Materials/Select/SingleSelect.vue'),
            },
            {
              path: '/personal-info-education',
              name: 'personal-info-education',
              component: () => import('@/components/Survey/Materials/Select/SingleSelect.vue'),
            },
          ],
        },
        {
          path: '/contact-group',
          name: 'contact-group',
          component: () => import('@/views/MaterialView/ContactGroupView.vue'),
        },
      ],
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/EditorView/Index.vue'),
      children: [
        {
          path: 'survey-type',
          name: 'survey-type',
          component: () => import('@/views/EditorView/LeftSide/SurveyType.vue'),
        },
        {
          path: 'outline',
          name: 'outline',
          component: () => import('@/views/EditorView/LeftSide/Outline.vue'),
        },
      ],
    },
    {
      path: '/preview/:id(\\d+)',
      name: 'preview',
      component: () => import('@/views/Preview.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 只针对组件市场页面路由切换组件状态
  const store = useMaterialStore();
  if (localStorage.getItem('activeView') === 'market' && to.name) {
    store.setCurrentMaterialComponent(to.name as string);
  }
  next();
});

export default router;
