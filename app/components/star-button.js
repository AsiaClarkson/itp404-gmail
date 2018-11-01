import Component from '@ember/component';

export default Component.extend({

    actions: {
        star(){
        this.onClick(!this.starred);
        // this.classList.toggle('starred');
        }
    }
});
