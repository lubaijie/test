import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button } from 'vant'
Vue.use(Button)

import { NavBar } from 'vant';
Vue.use(NavBar);

import { Icon } from 'vant';
Vue.use(Icon);

import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);

import { Form } from 'vant';
Vue.use(Form);

import { Field } from 'vant';
Vue.use(Field);

import { AddressList } from 'vant';
Vue.use(AddressList);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
