import Vue from 'vue'
import App from './App.vue'
import VueIdb from 'vue-idb'

Vue.config.productionTip = false

Vue.use(VueIdb)

const idb = new VueIdb({
  version: 1,
  database: 'eoscommons',
  schemas: [
    { friends: '++id, name, age' },
    //{ preferences: 'id, property' }
  ]
})

new Vue({
  idb: idb,
  render: h => h(App),
}).$mount('#app')