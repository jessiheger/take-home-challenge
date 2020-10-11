import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BillingFields, ContactFields } from './formFields';

const CustomInput = (props) => {
  const { errors } = useForm();
  const {label, name, placeholder, required, validation, message, register, onBlur } = props;

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        ref={register({
          required: required,
          pattern: {
            value: validation,
            messsge: message
          }
        })}
        required={required}
        onBlur={e => onBlur(e.target.value)}
      ></input>
      {errors[name] && errors[name].message}
    </div>
  )
}

export const ContactForm = () => {
  const { errors, register } = useForm();
  const [ userInfo, setUserInfo ] = useState({});

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4001/users/create',
      data: userInfo
    })
    .then( res => {
      console.log(res.data)
    }).catch(error => console.log(error))
  }

  const onBlur = (fieldName, val) => {
    console.log(fieldName, val);
    let newState = Object.assign({}, userInfo);
    newState[fieldName] = val;
    setUserInfo(newState);
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
      {ContactFields.map(field => {
        return (
          <CustomInput
            label={field.label}
            name={field.name}
            key={field.name}
            placeholder={field.placeholder}
            required={field.required}
            validation={field.value}
            message={field.message}
            register={register}
            onBlur={(val) => onBlur(field.name, val)}
          ></CustomInput>
        )
      })}
      <button type="submit">Next</button>
    </form>
  );
};

// TO DO: move this to it's own component
export const BillingForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
  <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
    {BillingFields.map(field => {
        return (
          <CustomInput
            label={field.label}
            name={field.name}
            key={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={field.value}
            message={field.message}
          ></CustomInput>
        )
      })}
      <button type="submit">Next</button>
  </form>
  )}