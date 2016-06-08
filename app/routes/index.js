import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
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
