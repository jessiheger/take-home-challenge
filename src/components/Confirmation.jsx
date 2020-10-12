import React from 'react';

export const Confirmation = props => {
    const { axiosResponse, userInfo, currentStep } = props;


    return (
        currentStep === 'CONFIRMATION' ? 
        <div>
            <h3>{axiosResponse}</h3>

            <div>Quantity: {userInfo.quantity}</div>
            <div>Price: {userInfo.total}</div>

            <h5>Contact Details:</h5>
            <div>Email: {userInfo.email}</div>
        </div>
        : <div></div>
    )
}