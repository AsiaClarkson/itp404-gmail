import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
      deleteEmail(model){
        let confirmed = window.confirm(
          "This post will be gone forever. Are you sure?"
        );
        if (confirmed){
          model.destroyRecord().then(() => {
          this.transitionToRoute('index');
        });
        }
      }
    }
  });
