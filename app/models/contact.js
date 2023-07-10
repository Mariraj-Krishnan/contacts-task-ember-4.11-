import Model, { attr } from '@ember-data/model';
export default class ContactModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') phone;
  @attr('string') address;

  isEqual() {
    return 'hi';
  }
}
