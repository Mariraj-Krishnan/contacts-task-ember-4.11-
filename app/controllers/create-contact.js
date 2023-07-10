import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class CreateContactController extends Controller {
  @service store;
  @service router;

  @action
  create() {
    this.store
      .createRecord('contact', this.model)
      .save()
      .then(() => this.replaceRoute('contacts'));
  }

  @action
  cancel() {
    this.router.transitionTo('contacts');
  }
}
