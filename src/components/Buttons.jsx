import React from 'react';

const setPrev = (currentStep) => {
    switch ( currentStep ) {
        case 'BILLING':
            return 'CONTACT';
        case 'CONTACT':
            return 'QUANTITY';
        default:
            return 'QUANTITY';
    }
  }

  const setNext = (currentStep) => {
    switch ( currentStep ) {
        case 'QUANTITY':
            return 'CONTACT';
        case 'CONTACT':
            return 'BILLING';
        case 'BILLING':
            return 'CONFIRMATION';
        default:
            return 'CONTACT';
    }
  }

  const submitOrder = (e, nextStep, submitNewOrder, setNextStep) => {
    submitNewOrder(e);
    setNextStep(nextStep);
  }

export const PreviousButton = props => {
    const { currentStep, setPreviousStep } = props;
    const previousStep = setPrev(currentStep);

  if (currentStep !== 'QUANTITY' && currentStep !== 'CONFIRMATION') {
    return (
      <button 
        type="button" onClick={() => setPreviousStep(previousStep)}>
      Previous
      </button>
    )
  }
  return null;
}

export const NextButton = props => {
    const { currentStep, setNextStep, submitNewOrder } = props;
    const nextStep = setNext(currentStep);

    if (currentStep === 'QUANTITY' || currentStep === 'CONTACT') {
      return (
        <button 
          type="button" onClick={() => setNextStep(nextStep)}>
        Next
        </button>        
      )
    } else if (currentStep === 'BILLING') {
      return (
          <button onClick= {(e) => submitOrder(e, nextStep, submitNewOrder, setNextStep)}>Submit Order</button>
      );
    }
    return null;
}