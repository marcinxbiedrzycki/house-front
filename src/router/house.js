export default {
  path: '/houses',
  name: 'houses',
  component: () => import('../components/house/Layout'),
  redirect: { name: 'HouseList' },
  children: [
    {
      name: 'HouseList',
      path: '',
      component: () => import('../views/house/List')
    },
    {
      name: 'HouseCreate',
      path: 'new',
      component: () => import('../views/house/Create')
    },
    {
      name: 'HouseUpdate',
      path: ':id/edit',
      component: () => import('../views/house/Update')
    },
    {
      name: 'HouseShow',
      path: ':id',
      component: () => import('../views/house/Show')
    }
  ]
};
