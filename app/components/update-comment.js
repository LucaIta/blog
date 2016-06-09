import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment){
      var params = {
        authorComment: this.get('author') ? this.get('author') : null,
        comment: this.get('string') ? this.get('string') : null
      };
      Object.keys(params).forEach(function(key){
        if (params[key] !== null) {
          comment.set(key,params[key]);
        }
      });
      this.sendAction('update', comment);
    }
  }
});
