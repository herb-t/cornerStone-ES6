import testAppJs from './app';
// import default from './components/test/index';
import App from './App.vue'

testAppJs();

// var app = new Vue({
//   el: '#greeting',
//   data: {
//       message: 'Room with a Vue! 🔥💯'
//   }
// });

new Vue({
  el: '#app',
  render: (h) => h(App)
})
