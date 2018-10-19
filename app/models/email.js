import DS from 'ember-data';

export default DS.Model.extend({
    from: DS.attr('string'),
    to: DS.attr('string'),
    subject: DS.attr('string'),
    message: DS.attr('string'),
    emailurl: DS.attr('string')
});
