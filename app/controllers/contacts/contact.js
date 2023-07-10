import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class ContactsContactController extends Controller {
  @service store;
  @service router;

  @action
  delete(contact_id) {
    this.store.peekRecord('contact', contact_id).destroyRecord();
    this.replaceRoute('contacts');
  }
}
