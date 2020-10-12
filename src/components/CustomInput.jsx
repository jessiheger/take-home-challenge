import React, { useState } from "react";
import { useRef } from "react";
import { ContactFields } from './formFields';
import { BillingFields } from "./formFields";


export const CustomInput = (props) => {
    const {label, name, placeholder, required, validation, message, register, addToOrder } = props;
    const [ fieldValue, setFieldValue ] = useState("");
    const [ error, setError ] = useState("")
    const ref = useRef();

    const handleChange = (val) => {
        setFieldValue(val);
    }

    const handleUserStateChange = () => {
          const formField = ContactFields.filter( field => field.name === name)[0] || BillingFields.filter( field => field.name === name)[0];
          if (!formField.value.test(fieldValue)) {
              setError(formField.message);
              setFieldValue("");
              ref.current.focus();
          } else {
              setFieldValue(fieldValue);
              addToOrder(name, fieldValue);
              setError("");
          }
  }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        <label>{label}</label>
        <input
          value={fieldValue}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          onChange={e => handleChange(e.target.value)}
          onBlur={() => handleUserStateChange(ref)}
        ></input>
        <div style={{color: 'red'}}>{error}</div>
      </div>
    )
  }