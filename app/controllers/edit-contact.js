import { action } from '@ember/object';
import { service } from '@ember/service';
import ManipulateContactController from './manipulate-contact';
export default class EditContactController extends ManipulateContactController {
  @service store;
  @service router;
  @action
  update() {
    const contact = this.store.peekRecord('contact', this.model.id);
    contact.setProperties(this.model);
    contact.save().then(() => this.router.replaceWith('contacts'));
  }
}
