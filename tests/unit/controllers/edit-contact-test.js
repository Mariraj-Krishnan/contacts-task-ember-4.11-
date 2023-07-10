import { module, test } from 'qunit';
import { setupTest } from 'contacts-task/tests/helpers';

module('Unit | Controller | edit-contact', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:edit-contact');
    assert.ok(controller);
  });
});
