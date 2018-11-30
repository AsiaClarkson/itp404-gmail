import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import window, { reset } from 'ember-window-mock';



module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });
  //2 starred 3 not starred
  test('displaying starred and unstarred emails', async function(assert) {
    server.create('email', {
          subject: 'test 1',
          to: 'test 1',
          from: 'test 1',
          message: 'test 1',
          starred: false
        });
      server.create('email', {
          subject: 'test 2',
          to: 'test 2',
          from: 'test 2',
          message: 'test 2',
          starred: false
        });
      server.create('email', {
          subject: 'test 3',
          to: 'test 3',
          from: 'test 3',
          message: 'test 3',
          starred: false
        });
      server.create('email', {
          subject: 'test 4' ,
          to: 'test 4',
          from: 'test 4',
          message: 'test 4',
          starred: true
        });
      server.create('email', {
          subject: 'test 5',
          to: 'test 5',
          from: 'test 5',
          message: 'test 5',
          starred: true
        });

    await visit('/');
     assert.dom('[data-test="email"]').exists({ count: 5 });
     assert.dom('[data-test-starred="starred"]').exists({ count: 2 });
     assert.dom('[data-test-starred="starrednt"]').exists({ count: 3 });

    assert.equal(currentURL(), '/');
  });

  test('viewing a single email', async function(assert) {
    server.create('email', {
      subject: 'test 1',
      to: 'test 1',
      from: 'test 1',
      message: 'test 1',
      emailurl: 'test 1',
      starred: false
    });

    await visit('/emails/1');

    assert.dom('[data-test="subject"]').hasText('test 1');    
    assert.dom('[data-test="to"]').hasText('test 1');
    assert.dom('[data-test="from"]').hasText('test 1');
    assert.dom('[data-test="message"]').hasText('test 1');
    assert.dom('[data-test="emailurl"]').hasText('test 1');
  });

  test('deleting an email', async function(assert) {
    server.createList('email', 1);
    window.confirm = () => true;

    await visit('/emails/1');
    await click('[data-test="delete-email"]');
    assert.dom('[data-test="email"]').exists({ count: 0 });
  });

  test('creating an email', async function(assert){
    await visit('/create');
    await fillIn('#to','email is dead');
    await fillIn('#from','email is dead');
    await fillIn('#subject','email is dead');
    await click('[data-test="send"]');

    assert.equal(currentURL(), '/emails/1');
    assert.dom('[data-test="to"]').hasText('email is dead');
    assert.dom('[data-test="from"]').hasText('email is dead');
    assert.dom('[data-test="subject"]').hasText('email is dead');
  });

});
