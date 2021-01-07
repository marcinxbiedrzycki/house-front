import Vue from 'vue';
import Vuex from 'vuex';
import houseService from '../services/house';
import userService from '../services/user';
import makeCrudModule from './modules/crud';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        house: makeCrudModule({
            service: houseService
        }),
        user: makeCrudModule({
            service: userService
        })
    }
});

export default store;
