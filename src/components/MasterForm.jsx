import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Quantity } from './Quantity';
import { Contact } from './Contact';
import { Billing } from './Billing';
import { PreviousButton, NextButton } from './Buttons'
import { ContactFields } from './formFields';
import { BillingFields } from "./formFields";
import { useEffect } from "react";



export const MasterForm = () => {
    const { errors, register } = useForm();
    const [ userInfo, setUserInfo ] = useState({"quantity": 1});
    const [ currentStep, setCurrentStep ] = useState("QUANTITY");
    const [ isFormValid, setIsFormValid ] = useState(false);

    useEffect(() => {
        console.log("state", userInfo);
    }, [userInfo]);
        
    const setPreviousStep = prevStep => setCurrentStep(prevStep);
    
    const setNextStep = nextStep => setCurrentStep(nextStep);

    const addToOrder = (fieldName, val) => {
        let newState = Object.assign({}, userInfo);
        newState[fieldName] = val;
        setUserInfo(newState);
    }

    const handleChange = (fieldName, val) => {
        if (val !== "") {
            console.log(fieldName, val)
            const formField = ContactFields.filter( field => field.name === fieldName)[0] || BillingFields.filter( field => field.name === fieldName)[0];
            if (!formField.value.test(val)) {
                alert('invalid entry');
            } else {
                let newState = Object.assign({}, userInfo);
                newState[fieldName] = val;
                setUserInfo(newState);
            }
        }
    }

    const handleSubmit = () => {
        if (isFormValid) {
            axios({
                method: 'post',
                url: 'http://localhost:4001/users/create',
                data: userInfo
            })
            .then( res => {
                console.log(res.data)
            }).catch(error => console.log(error))
        }
    }

  
    return (
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <Quantity addToOrder={addToOrder} currentStep={currentStep} register={register}/>
        <Contact addToOrder={addToOrder} currentStep={currentStep} register={register}/>
        <Billing addToOrder={addToOrder} currentStep={currentStep} register={register}/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <PreviousButton currentStep={currentStep} setPreviousStep={setPreviousStep} />
            <NextButton currentStep={currentStep} setNextStep={setNextStep} submitNewOrder={handleSubmit}/>
        </div>
      </form>
    );
  };