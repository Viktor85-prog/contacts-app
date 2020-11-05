import React from "react";
import classes from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched,error},children }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + "  " + (hasError ? classes.error : "")}
    >
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};


export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props
  return (
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
  <FormControl {...props}><input {...input} {...restProps}/></FormControl>
  )
};


export const createField = (validate, component, name, type, placeholder, text) => {
  return (
    <div>
  <Field
          validate={[validate]}
          component={component}
          name={name}
           type={type}
          placeholder={placeholder}
      />
      {text}
      </div>
  )
}