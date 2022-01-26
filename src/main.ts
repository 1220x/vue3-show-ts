import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/common/index.scss'

import ItemData from './model/ItemData'
import DataHelper from './store/DataHelper'
const item = new ItemData()
const data = new DataHelper();
data.addData(item);

const res = data.readData();

console.log(res);

createApp(App).use(store).use(router).mount('#app')
