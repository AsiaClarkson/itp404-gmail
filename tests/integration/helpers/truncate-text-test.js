import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  test('on inital render', async function(assert){
    this.set('message', 'texting');
    this.set('limit', '4');
    await render(hbs `{{truncate-text message limit}}`);

    assert.equal(this.element.textContent.trim(), 'text...');
  });

  // Replace this with your real tests.
  // test('it renders', async function(assert) {
  //   this.set('inputValue', '1234');

  //   await render(hbs`{{truncate-text inputValue}}`);

  //   assert.equal(this.element.textContent.trim(), '1234');
  // });
});
