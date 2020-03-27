// import auth from './middleware/auth';
// import guest from './middleware/guest';
import accessToRoute from './middleware/access';

const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        meta: {
          title: 'Главная',
          middleware: [
            accessToRoute,
          ],
        },
        component: () => import('pages/Index.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: '404',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
