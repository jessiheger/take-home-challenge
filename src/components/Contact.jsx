import React from 'react';
import { CustomInput } from './CustomInput';
import { ContactFields } from './formFields';


export const Contact = props => {
    const { currentStep, handleChange, register } = props;
  
    return (
        currentStep === 'CONTACT' ? 
        <div>
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
                handleChange={(val) => handleChange(field.name, val)}
                ></CustomInput>
            )
            })}
        </div>
        : <div></div>
    );
  };