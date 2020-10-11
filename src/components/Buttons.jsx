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
        default:
            return 'CONTACT';
    }
  }

export const PreviousButton = props => {
    const { currentStep, setPreviousStep } = props;
    const previousStep = setPrev(currentStep);

  if (currentStep !== 'QUANTITY') {
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

    if (currentStep !== 'BILLING') {
      return (
        <button 
          type="button" onClick={() => setNextStep(nextStep)}>
        Next
        </button>        
      )
    }
    return (
        <button onClick= {() => submitNewOrder}>Submit Order</button>
    );
}