import { module, test } from 'qunit';
import { setupRenderingTest } from 'contacts-task/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contacts-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContactsList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ContactsList>
        template block text
      </ContactsList>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
