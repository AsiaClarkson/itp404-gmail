import Component from '@ember/component';

export default Component.extend({
    starred: false,
    actions:{
        star(email, newValue){
            // console.log('clicked');
            email.set('starred', newValue);
            email.save();
        }
    }
});
