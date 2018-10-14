import React from 'react';

export const FormGroup = ({ children, label }) => (
  <div className="form-group">
    <label>{label}</label>
    {children}
  </div>
);
