import React from 'react';
import { Field } from "redux-form";
import { FormGroup } from '../form-group/form-group.component';

const Textarea = ({ input, type, label, meta: { error, touched } }) => (
  <React.Fragment>
    <FormGroup label={label}>
      <textarea {...input} type={type} className="form-control" />
    </FormGroup>

    {touched && error && <div className="alert alert-danger">{error}</div>}
  </React.Fragment>
);

export const TextareaComponent = props => (
  <Field
    {...props}
    component={Textarea}
  />
);
