import React, { ChangeEventHandler } from "react";

type InputProps = {
  label: string;
  type: string;
  step?: string;
  className: string;
  feedbackId: string;
  errorMessage: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, type, step, className, feedbackId, errorMessage, onChange } = props;
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input ref={ref} step={step} type={type} className={className} onChange={onChange} />
        <div id={feedbackId} className="invalid-feedback">
          {errorMessage}
        </div>
      </div>
    );
  }
);

export default InputField;
