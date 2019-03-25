import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Vuex from "vuex"
import { store } from './store'
import UUID from 'vue-uuid';
Vue.use(UUID);
Vue.use(Vuex);


Vue.config.productionTip = false


import firebase from "firebase"
import "firebase/firestore"
import firebaseConfig from "./config/firebase"

firebase.initializeApp(firebaseConfig);

//con este parametro accedemos a las colecciones que se encuentran en la db firestore
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

export default db;


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

Vue.use(store);


