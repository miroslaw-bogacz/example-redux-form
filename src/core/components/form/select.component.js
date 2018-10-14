import React from 'react';
import { Field,  } from "redux-form";
import { FormGroup } from '../form-group/form-group.component';

const Select = ({ input, type, label, meta: { error, touched }, children }) => (
  <React.Fragment>
    <FormGroup label={label}>
      <select {...input} type={type} className="form-control">
        {children}
      </select>
    </FormGroup>

    {touched && error && <div className="alert alert-danger">{error}</div>}
  </React.Fragment>
);

export const SelectComponent = ({ children, ...props }) => (
  <Field
    {...props}
    children={children}
    component={Select}
  />
);
