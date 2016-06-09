import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title') ? this.get('title') : null,
        content: this.get('content') ? this.get('content') : null,
        author: this.get('postAuthor') ? this.get('postAuthor') : null,
        date: this.get('date') ? this.get('date') : null
      };
      console.log(params);
      var shorterContent = params.content.slice(0,3);
      params.shortContent = shorterContent;
      this.sendAction('save', params);
    }
  }
});
