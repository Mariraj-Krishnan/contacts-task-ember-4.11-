import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class ContactsContactRoute extends Route {
  @service store;
  @service router;
  model({ contact_id }) {
    const contact = this.store.peekRecord('contact', contact_id);
    if (contact === null) {
      this.router.transitionTo('not-found', 'not-found');
    }
    return contact;
  }
}
