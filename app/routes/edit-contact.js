import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class EditContactRoute extends Route {
  @service store;
  model({ contact_id }) {
    return this.store.findRecord('contact', contact_id).then((contact) => {
      const {
        data: { attributes, id },
      } = contact.serialize({ includeId: true });
      return { ...attributes, id };
    });
  }
}
