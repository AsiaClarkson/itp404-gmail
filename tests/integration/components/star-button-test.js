import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('star empty', async function(assert) {
    this.set('starred', false);
    await render(hbs `<StarButton @starred={{starred}}/>`);

    assert.dom('span').hasClass('starrednt');
  });

  test('star filled', async function(assert) {
    this.set('starred', true);
    await render(hbs `    
    <StarButton @starred={{starred}}/>`);

    assert.dom('span').hasClass('starred');

  });

});
