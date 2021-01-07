import Vue from 'vue';
import VueRouter from 'vue-router';
import houseRoutes from './house';
import userRoutes from './user';

Vue.use(VueRouter);

export default new VueRouter({
    // ...
    routes: [
        houseRoutes,
        userRoutes,
    ]
});

