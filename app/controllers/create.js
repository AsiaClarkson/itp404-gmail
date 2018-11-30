import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      createEmail(event) {
        event.preventDefault();
        //read out the inputs
        // console.log(this.title, this.body);
        //save email model
        let email = this.store.createRecord('email', {
          to: this.to,
          from: this.from,
          subject: this.subject,
          message: this.message,
          emailurl: "iluvhotmail@aol.com"
        });
        email.save().then(() =>{
            this.transitionToRoute('email', email.id);
        });
      }
    }
  });