import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // var allPosts = this.store.findAll('post');
    return this.store.query('post', {limitToLast: 5});

  },
  actions: {
    save(newPost) {
      var thisPost = this.store.createRecord('post', newPost);
      thisPost.save();
    },
    delete(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
