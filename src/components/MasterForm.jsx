import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Quantity } from './Quantity';
import { Contact } from './Contact';
import { Billing } from './Billing';
import { PreviousButton, NextButton } from './Buttons'


export const MasterForm = () => {
    const { errors, register } = useForm();
    const [ userInfo, setUserInfo ] = useState({});
    const [ currentStep, setCurrentStep ] = useState("QUANTITY");
        
    const setPreviousStep = prevStep => setCurrentStep(prevStep);
    
    const setNextStep = nextStep => setCurrentStep(nextStep);

    const handleChange = (fieldName, val) => {
        console.log(fieldName, val);
        let newState = Object.assign({}, userInfo);
        newState[fieldName] = val;
        setUserInfo(newState);
    }

    const handleSubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/users/create',
            data: userInfo
        })
        .then( res => {
            console.log(res.data)
        }).catch(error => console.log(error))
    }

  
    return (
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <Quantity handleChange={handleChange} currentStep={currentStep} register={register}/>
        <Contact handleChange={handleChange} currentStep={currentStep} register={register}/>
        <Billing handleChange={handleChange} currentStep={currentStep} register={register}/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <PreviousButton currentStep={currentStep} setPreviousStep={setPreviousStep} />
            <NextButton currentStep={currentStep} setNextStep={setNextStep} />
        </div>
      </form>
    );
  };