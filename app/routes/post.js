import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post){
      post.save();
    }
  }
});
