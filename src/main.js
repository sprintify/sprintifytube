import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyD45vkPALa6FasMqRuLeEPoaoE7fNIgK_8",
  authDomain: "myproject-90a02.firebaseapp.com",
  databaseURL: "https://myproject-90a02.firebaseio.com",
  projectId: "myproject-90a02",
  storageBucket: "myproject-90a02.appspot.com",
  messagingSenderId: "890931413861",
  appId: "1:890931413861:web:1636d8f1e43b0148"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
