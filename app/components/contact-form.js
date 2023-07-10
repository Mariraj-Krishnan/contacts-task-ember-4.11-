import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import _ from 'lodash';
import { isEqual } from '@ember/utils';
export default class ContactFormComponent extends Component {
  @tracked
  errors = {};

  constructor() {
    super(...arguments);
    this.initialData = { ...this.args.contact };
  }

  inputFormats = [
    {
      key: 'name',
      label: 'Name',
      pattern: /\w{5,}/,
      type: 'text',
      keyForError: 'nameError',
    },
    {
      key: 'phone',
      label: 'Phone',
      pattern: /\d{10}/,
      type: 'phone',
      keyForError: 'phoneError',
    },
    {
      key: 'email',
      label: 'Email',
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      type: 'email',
      keyForError: 'emailError',
    },
    {
      key: 'address',
      label: 'Address',
      pattern: /\w{5,}/,
      type: 'text',
      keyForError: 'addressError',
    },
  ];
  //   constructor() {
  //     super(...arguments);
  //     this.errors = {};
  //   }

  validate() {
    return this.inputFormats.reduce(
      (valid, { key, pattern, label, keyForError }) => {
        if (!this.args.contact[key]) {
          this.errors[keyForError] = `${label} is required`;
          this.errors = this.errors;
          return false;
        }
        if (!this.args.contact[key].match(pattern)) {
          this.errors[keyForError] = `Invalid ${label.toLowerCase()}`;
          this.errors = this.errors;
          return false;
        }
        return valid && true;
      },
      true
    );
  }

  hasChange() {
    const change = !_.isEqual(this.args.contact, this.initialData);
    if (!change) {
      this.errors.noChange = 'No modifications found!';
      this.errors = this.errors;
    }
    return change;
  }

  @action
  submit() {
    if (this.validate() && this.hasChange()) {
      this.args.onSubmit();
    }
  }

  @action
  cancel() {
    this.args.onCancel();
  }
}
