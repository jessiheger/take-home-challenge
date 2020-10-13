import React from 'react';
import PropTypes from 'prop-types';

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
    setNextStep(e, nextStep);
  }

export const PreviousButton = props => {
    const { currentStep, setPreviousStep } = props;
    const previousStep = setPrev(currentStep);

  if (currentStep !== 'QUANTITY' && currentStep !== 'CONFIRMATION') {
    return (
      <button 
        type="button" onClick={() => setPreviousStep(previousStep)} style={PreviousButton.styles.button}>
      Previous
      </button>
    )
  }
  return null;
}

export const NextButton = props => {
    const { currentStep, setNextStep, submitNewOrder, isDisabled } = props;
    const nextStep = setNext(currentStep);

    const getNextButtonStyle = () => {
      return isDisabled ? { ...NextButton.styles.button, ...NextButton.styles.disabled } : NextButton.styles.button;
    }

    if (currentStep === 'QUANTITY' || currentStep === 'CONTACT') {
      return (
        <button 
          type="button" onClick={(e) => setNextStep(e, nextStep)} style={getNextButtonStyle()} disabled={isDisabled}>
        Next
        </button>        
      )
    } else if (currentStep === 'BILLING') {
      return (
          <button onClick= {(e) => submitOrder(e, nextStep, submitNewOrder, setNextStep)} disabled={isDisabled}>Let's do this!</button>
      );
    }
    return null;
}

PreviousButton.propTypes = {
  currentStep: PropTypes.string.isRequired,
  setPreviousStep: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  currentStep: PropTypes.string.isRequired,
  setNextStep: PropTypes.func.isRequired,
  submitNewOrder: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

PreviousButton.styles = {
  button: {
    backgroundColor: 'rgb(51, 46, 84)',
    borderColor: 'rgb(51, 46, 84)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '0.25rem',
    fontFamily: 'larssiet, "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, Verdana, sans-serif',
    padding: '1rem',
    cursor: 'pointer',
  }
}

NextButton.styles = {
  button: {
    backgroundColor: 'rgb(51, 46, 84)',
    borderColor: 'rgb(51, 46, 84)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '0.25rem',
    fontFamily: 'larssiet, "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, Verdana, sans-serif',
    padding: '1rem',
    cursor: 'pointer',
  },
  disabled: {
    backgroundColor: 'grey',
    borderColor: 'grey',
    cursor: 'not-allowed'
  }
}