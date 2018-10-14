import React from 'react';
import * as R from 'ramda';
import { reduxForm, Form, FormSection, FieldArray, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { QuestionsComponent } from './components/questions';
import { InputComponent } from '../core/components/form/input.component';
import { SelectComponent } from '../core/components/form/select.component';
import { TextareaComponent } from '../core/components/form/textarea.component';
import { contactFormValidation } from './validations/contact-form.validation';

export const ContactForm = ({ handleSubmit, type }) => (
  <Form onSubmit={handleSubmit}>
    <h1>Contact</h1>
    <FormSection name="person">
      <InputComponent type="text" name="name" label="Name" />
      <InputComponent label="Email" name="email" type="text" />
      <InputComponent label="Phone number" name="phoneNumber" />
      <InputComponent label="Age" name="age" type="number" />
    </FormSection>

    <SelectComponent name="type" label="Type">
      <option />
      <option value="questions">Questions</option>
      <option value="issue">Issue</option>
    </SelectComponent>

    {type === 'questions' && (
      <React.Fragment>
        <h2>Questions</h2>
        <FieldArray name="questions" component={QuestionsComponent} />
      </React.Fragment>
    )}

    {type === 'issue' && (
      <React.Fragment>
        <h2>Issue</h2>
        <TextareaComponent name="issue" label="Issue description" />
      </React.Fragment>
    )}

    <button className="btn btn-success btn-block">Submit</button>
  </Form>
);

const mapStateToProps = (state) => ({
  type: formValueSelector('contact')(state, 'type'),
});

export const ContactFormComponent = R.pipe(
  connect(mapStateToProps),
  reduxForm({
    form: 'contact',
    validate: contactFormValidation,
    onSubmit: (data, props) => console.log(data, props),
    initialValue: {}
  }),
)(ContactForm);
