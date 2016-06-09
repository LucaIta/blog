import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    save() {
      var params = {
        authorComment: this.get('author') ? this.get('author'):null,
        comment: this.get('comment') ? this.get('comment'):null,
        post: this.get('post')
      };
      this.sendAction('save', params);
    }
  }
});
