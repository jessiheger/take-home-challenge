import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Quantity } from './Quantity';
import { Contact } from './Contact';
import { Billing } from './Billing';
import { Confirmation } from './Confirmation';
import { PreviousButton, NextButton } from './Buttons'


export const MasterForm = () => {
    const { errors, register } = useForm();
    const [ userInfo, setUserInfo ] = useState({"quantity": 1});
    const [ currentStep, setCurrentStep ] = useState("QUANTITY");
    const [ axiosResponse, setAxiosResponse ] = useState("");
 
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
                url: 'http://localhost:4001/users/create',
                data: userInfo
            })
            .then( res => {
                setAxiosResponse(res.data.message);
            }).catch(error => console.log(error))
    };

  
    return (
      <div>
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <Quantity addToOrder={addToOrder} currentStep={currentStep} />
            <Contact addToOrder={addToOrder} currentStep={currentStep} />
            <Billing addToOrder={addToOrder} currentStep={currentStep} />
            <Confirmation currentStep={currentStep} axiosResponse={axiosResponse} userInfo={userInfo}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <PreviousButton currentStep={currentStep} setPreviousStep={setPreviousStep} />
                <NextButton currentStep={currentStep} setNextStep={setNextStep} submitNewOrder={submitNewOrder}/>
            </div>
        </form>
      </div>
    );
  };