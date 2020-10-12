import axios from "axios";
import React, { useState } from "react";
import { Quantity } from './Quantity';
import { Contact } from './Contact';
import { Billing } from './Billing';
import { Confirmation } from './Confirmation';
import { PreviousButton, NextButton } from './Buttons'
import { Breadcrumbs } from './Breadcrumbs';


export const MasterForm = () => {
    const [ userInfo, setUserInfo ] = useState({"quantity": 1, "total": "49.99"});
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
                url: 'http://localhost:4001/api/magic',
                data: userInfo
            })
            .then( res => {
                setAxiosResponse(res.data.message);
            }).catch(error => console.log(error))
    };

  
    return (
      <div style={MasterForm.styles.container}>
        <Breadcrumbs currentStep={currentStep} />
        <form style={MasterForm.styles.form}>
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