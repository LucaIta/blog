import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

    return this.store.findRecord('comment', params.comment_id);
  },
  actions: {
    update(comment) {
      comment.save();
    },
    delete(model) {
      model.destroyRecord();
      console.log(model.post);
      this.transitionTo("index");
    }
  }
});
