import React from 'react';
import axios from 'axios';
import { BillingForm, ContactForm, Quantity } from '../components';

function App() {

  const onReset = () => {
    axios({
      method: 'put',
      url: 'http://localhost:4001/users/reset',
      data: {}
    }).then( res => {
        console.log(res.data)
      }).catch(error => console.log(error))
    }

  return (
    <div>
      <ContactForm />
      {/* <BillingForm /> */}
      <Quantity />
      <button onClick={onReset}>RESET USERS</button>
    </div>
  );
}

export default App;
