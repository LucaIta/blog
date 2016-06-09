import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post){
      post.save();
    },
    saveComment(params){
      var thisComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(thisComment);
      thisComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    }
  }
});
