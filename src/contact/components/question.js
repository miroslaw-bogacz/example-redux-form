import React from "react";
import { InputComponent } from '../../core/components/form/input.component';

export const QuestionComponent = ({ index, field }) => (
  <InputComponent type="text" name={field} label={`Question ${index + 1}`} fromat={null} />
);
