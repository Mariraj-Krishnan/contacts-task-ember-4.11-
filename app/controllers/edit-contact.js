import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class EditContactController extends Controller {
  @service store;
  @service router;
  @action
  update() {
    const contact = this.store.peekRecord('contact', this.model.id);
    contact.setProperties(this.model);
    contact.save().then(() => this.router.replaceWith('contacts'));
  }

  @action
  cancel() {
    this.router.transitionTo('contacts');
  }
}
