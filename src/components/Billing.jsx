import React from 'react';
import { CustomInput } from './CustomInput';
import { BillingFields } from './formFields';
import PropTypes from 'prop-types';



export const Billing = props => {
  const { addToOrder, currentStep, removeFromErrorList } = props;
  
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
              message={field.message}
              required={field.required}
              validation={field.validation}
              addToOrder={addToOrder}
              removeFromErrorList={removeFromErrorList}
            ></CustomInput>
          )
        })}
    </div>
    : <div></div>
)}

Billing.propTypes = {
  addToOrder: PropTypes.func,
  currentStep: PropTypes.string,
};