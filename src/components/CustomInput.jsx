import React from "react";
import { useForm } from "react-hook-form";


export const CustomInput = (props) => {
    const { errors } = useForm();
    const {label, name, placeholder, required, validation, message, register, handleChange } = props;
  
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
          onBlur={e => handleChange(e.target.value)}
        ></input>
        {errors[name] && errors[name].message}
      </div>
    )
  }