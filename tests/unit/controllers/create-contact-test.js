import { module, test } from 'qunit';
import { setupTest } from 'contacts-task/tests/helpers';

module('Unit | Controller | create-contact', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:create-contact');
    assert.ok(controller);
  });
});
