import React from 'react';
import { Field } from "redux-form";
import { FormGroup } from '../form-group/form-group.component';

const Input = ({ input, type, label, meta: { error, touched } }) => (
  <React.Fragment>
    <FormGroup label={label}>
      <input {...input} type={type} className="form-control" />
    </FormGroup>

    {touched && error && <div className="alert alert-danger">{error}</div>}
  </React.Fragment>
);

export const InputComponent = props => (
  <Field
    {...props}
    component={Input}
  />
);
