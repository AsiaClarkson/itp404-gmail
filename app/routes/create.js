import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller, model){
        controller.set('subject', "");
        controller.set('from', "");
        controller.set('emailurl', "");
        controller.set('to', "");
        controller.set('message', "");
    }
});
