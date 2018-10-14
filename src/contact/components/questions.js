import React from 'react';
import { QuestionComponent } from './question';

export const QuestionsComponent = ({ fields, meta: { error } }) => (
  <React.Fragment>
    {fields.map((field, index) => (<QuestionComponent key={field + index} field={field} index={index} />))}

    <button
      type="button"
      className="btn btn-primary"
      onClick={() => fields.push(null)}
    >
      + Add question
    </button>

    {error && (<div className="alert alert-danger">{error}</div>)}
  </React.Fragment>
);
