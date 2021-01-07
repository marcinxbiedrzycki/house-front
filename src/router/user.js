export default {
  path: '/users',
  name: 'users',
  component: () => import('../components/user/Layout'),
  redirect: { name: 'UserList' },
  children: [
    {
      name: 'UserList',
      path: '',
      component: () => import('../views/user/List')
    },
    {
      name: 'UserCreate',
      path: 'new',
      component: () => import('../views/user/Create')
    },
    {
      name: 'UserUpdate',
      path: ':id/edit',
      component: () => import('../views/user/Update')
    },
    {
      name: 'UserShow',
      path: ':id',
      component: () => import('../views/user/Show')
    }
  ]
};
