import React from 'react';
import { CustomInput } from './CustomInput';
import { BillingFields } from './formFields';


export const Billing = props => {
    const { currentStep, handleChange, register } = props;
  
return (
    currentStep === 'BILLING' ?
    <div>
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
              register={register}
              handleChange={(val) => handleChange(field.name, val)}
            ></CustomInput>
          )
        })}
    </div>
    : <div></div>
    )}