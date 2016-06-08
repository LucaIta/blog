import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      this.sendAction('delete', post);
    },
    posts(posts) {
      var allPosts = posts.__ember_meta__.values.content;
      var firstFive = allPosts.splice(0,5);
      console.log(firstFive);
    }
  }
});
