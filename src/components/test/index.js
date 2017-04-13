import Vue from 'vue';
import template from './template.vue';


export default Vue.component('test', {

  mixins: [ template ],

  methods: {
    onClick() {
      console.log('You have clicked');
    }
  }

});
