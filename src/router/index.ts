import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue'),
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
        },
        {
          path: '/profile-group',
          name: 'profile-group',
          component: () => import('@/views/MaterialView/ProfileGroupView.vue'),
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
    },
  ],
});

export default router;
