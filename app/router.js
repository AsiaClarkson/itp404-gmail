import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('trash');
  this.route('sent');
  this.route('email', {path: '/emails/:id'});
  this.route('create');
});

export default Router;
