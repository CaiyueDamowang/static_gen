export default [
  {
    path: 'A',
    component: () => import('../docs/list.md'),
  },
  {
    path: 'B',
    component: () => import('../docs/react-router.md'),
  },
  {
    path: 'C',
    component: () => import('../docs/react.md'),
  },
];
