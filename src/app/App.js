import React from 'react';
import axios from 'axios';
import { MasterForm } from 'components/MasterForm';

function App() {

  // TO DO: REMOVE OR MOVE
  const onReset = () => {
    axios({
      method: 'put',
      url: 'http://localhost:4001/api/magic/reset',
      data: {}
    }).then( res => {
        console.log(res.data)
      }).catch(error => console.log(error))
    }

    const updateUser = () => {
      axios({
        method: 'put',
        url: 'http://localhost:4001/api/magic',
        data: {fulfilled : true, id : 5}
      }).then( res => {
          console.log(res.data)
        }).catch(error => console.log(error))
      }

  return (
    <div>
      <MasterForm />
      {/* TO DO: REMOVE OR MOVE */}
      <button onClick={onReset}>RESET USERS</button>
      <button onClick={updateUser}>UPDATE</button>
    </div>
  );
}

export default App;
