import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  shortContent: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comments', {async:true})
});
