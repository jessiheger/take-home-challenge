import React from 'react';
import { CustomInput } from './CustomInput';
import { BillingFields } from './formFields';
import PropTypes from 'prop-types';



export const Billing = props => {
  const { addToOrder, currentStep } = props;
  
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
              addToOrder={addToOrder}
            ></CustomInput>
          )
        })}
    </div>
    : <div></div>
)}

Billing.propTypes = {
  addToOrder: PropTypes.func,
  currentStep: PropTypes.string,
  register: PropTypes.func,
};