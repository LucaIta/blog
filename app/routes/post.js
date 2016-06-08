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
    // update(post){
    //   var params = {
    //     title: this.get('title') ? this.get('title') : null,
    //     content: this.get('story') ? this.get('story') : null,
    //     author: this.get('author') ? this.get('author') : null,
    //     date: this.get('date') ? this.get('date') : null
    //   };
    //   console.log(params);
    //   // this.sendAction('update', params, post);
    //   Object.keys(params).forEach(function(key){
    //     console.log(params[key]);
    //     if(params[key] !== null) {
    //       post.set(key,params[key]);
    //     }
    //   });
    //   post.save();
    // }
  }
});
