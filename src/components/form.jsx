import React from "react";
import { useForm } from "react-hook-form";
import { BillingFields, ContactFields } from './formFields';

const CustomInput = (props) => {
  const { register, errors } = useForm();
  const {label, name, placeholder, required, value, message } = props;

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        ref={register({
          required: required,
          pattern: {
            value: value,
            messsge: message
          }
        })}
        required={required}

      ></input>
      {errors[name] && errors[name].message}
    </div>
  )
}

export const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
      {ContactFields.map(field => {
        return (
          <CustomInput
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={field.value}
            message={field.message}
          ></CustomInput>
        )
      })}
      {BillingFields.map(field => {
        return (
          <CustomInput
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={field.value}
            message={field.message}
          ></CustomInput>
        )
      })}
      <button type="submit">Next</button>
    </form>
  );
};