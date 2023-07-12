import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import _ from 'lodash';
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

  validateAll() {
    this.errors = {};
    return this.inputFormats.reduce((valid, format) => {
      return this.validateField(format, this.args.contact[format.key]) && valid;
    }, true);
  }

  @action
  validateField({ pattern, label, keyForError }, value) {
    let valid;
    if (!value) {
      this.errors[keyForError] = `${label} is required`;
      valid = false;
    } else if (!value.match(pattern)) {
      this.errors[keyForError] = `Invalid ${label.toLowerCase()}`;
      valid = false;
    } else {
      this.errors[keyForError] = '';
      valid = true;
    }
    this.errors = this.errors;
    return valid;
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
    if (this.validateAll() && this.hasChange()) {
      this.args.onSubmit();
    }
  }

  @action
  cancel() {
    this.args.onCancel();
  }
}
