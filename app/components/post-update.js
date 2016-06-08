import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post){
      var params = {
        title: this.get('title') ? this.get('title') : null,
        content: this.get('story') ? this.get('story') : null,
        author: this.get('author') ? this.get('author') : null,
        date: this.get('date') ? this.get('date') : null
      };
      Object.keys(params).forEach(function(key){
        console.log(params[key]);
        if(params[key] !== null) {
          post.set(key,params[key]);
        }
      });
      this.sendAction('update', post);
    }
  }

});
