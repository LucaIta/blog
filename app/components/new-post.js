import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title') ? this.get('title') : null,
        content: this.get('content') ? this.get('content') : null,
        author: this.get('author') ? this.get('author') : null,
        date: this.get('date') ? this.get('date') : null
      };
      this.sendAction('save', params);
    }
  }
});
