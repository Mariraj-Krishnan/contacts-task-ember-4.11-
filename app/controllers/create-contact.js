import { action } from '@ember/object';
import { service } from '@ember/service';
import ManipulateContactController from './manipulate-contact';
export default class CreateContactController extends ManipulateContactController {
  @service store;
  @service router;

  @action
  create() {
    this.store
      .createRecord('contact', this.model)
      .save()
      .then(() => this.replaceRoute('contacts'));
  }
}
