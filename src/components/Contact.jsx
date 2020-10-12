import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from './CustomInput';
import { ContactFields } from './formFields';


export const Contact = props => {
    const { addToOrder, currentStep } = props;
  
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
                addToOrder={addToOrder}
                ></CustomInput>
            )
            })}
        </div>
        : <div></div>
    );
  };

  Contact.propTypes = {
    addToOrder: PropTypes.func,
    currentStep: PropTypes.string,
};