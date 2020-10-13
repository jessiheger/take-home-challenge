import axios from "axios";
import React, { useState } from "react";
import { Quantity } from './Quantity';
import { Contact } from './Contact';
import { Billing } from './Billing';
import { Confirmation } from './Confirmation';
import { PreviousButton, NextButton } from './Buttons'
import { Breadcrumbs } from './Breadcrumbs';
import { useEffect } from "react";
import { ContactFields, BillingFields } from './formFields';


export const MasterForm = () => {
    const [ userInfo, setUserInfo ] = useState({"quantity": 1, "total": "49.99"});
    const [ currentStep, setCurrentStep ] = useState("QUANTITY");
    const [ axiosResponse, setAxiosResponse ] = useState("");
    const [ errors, setErrors ] = useState([]);

    useEffect (() => {
        let currentFields = currentStep === 'CONTACT' 
        ? ContactFields.filter(field => field.required) 
        : currentStep === 'BILLING' 
        ? BillingFields.filter(field => field.required) 
        : [];
        const errors = [];
        currentFields.forEach( field => errors.push(field.name));
        setErrors(errors);
    }, [currentStep]);
 
    const setPreviousStep = prevStep => setCurrentStep(prevStep);
    
    const setNextStep = nextStep => setCurrentStep(nextStep);

    const addToOrder = (fieldName, val) => {
        let newState = Object.assign({}, userInfo);
        newState[fieldName] = val;
        setUserInfo(newState);
    };

    const submitNewOrder = (e) => {
        e.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4001/api/magic',
                data: userInfo
            })
            .then( res => {
                setAxiosResponse(res.data.message);
            }).catch(error => console.log(error))
    };

    // const addToErrorList = (fieldNameWithError) => {
    //     let errorList = [...errors, ...fieldNameWithError];
    //     setErrors(errorList);
    // }

    const removeFromErrorList = (validFieldName) => {
        let errorList = errors.filter(fieldNameWithError => fieldNameWithError !== validFieldName);
        setErrors(errorList);
    }

  
    return (
      <div style={MasterForm.styles.container}>
        <Breadcrumbs currentStep={currentStep} />
        <form style={MasterForm.styles.form}>
            <Quantity addToOrder={addToOrder} currentStep={currentStep} />
            <Contact removeFromErrorList={removeFromErrorList} addToOrder={addToOrder} currentStep={currentStep} />
            <Billing removeFromErrorList={removeFromErrorList} addToOrder={addToOrder} currentStep={currentStep} />
            <Confirmation currentStep={currentStep} axiosResponse={axiosResponse} userInfo={userInfo}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <PreviousButton currentStep={currentStep} setPreviousStep={setPreviousStep} />
                <NextButton currentStep={currentStep} setNextStep={setNextStep} submitNewOrder={submitNewOrder} isDisabled={errors.length > 0}/>
            </div>
        </form>
      </div>
    );
  };

  MasterForm.styles = {
      container: {
          width: '100%',
          minWidth: '400px',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
        padding: '2rem',
        border: '1px solid rgb(237, 237, 240)',
        overflowY: 'auto',
      }
  }