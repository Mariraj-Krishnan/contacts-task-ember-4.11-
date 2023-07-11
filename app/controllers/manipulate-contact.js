import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class ManipulateContactController extends Controller {
  @action
  cancel() {
    this.router.transitionTo('contacts');
  }
}