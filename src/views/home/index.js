import Vue from 'vue';
import template from './template.vue';

export default Vue.component('home', {
  mixins: [ template ],

  data() {
    return { expanded: false };
  },

  methods: {
    toggleExpanded: function() {
      this.expanded = !this.expanded;
      if (this.expanded) {
        console.log('expanded even');
      }
    }
  }
});
