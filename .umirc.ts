import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/products', component: '@/pages/products'
    }
  ],
});
