import React from 'react';
import ReactDOM from 'react-dom/client';

import ContactIndex from './Components/Contacts/ContactIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <div style={{backgroundColor : "black", color: "GrayText"}}>
  <ContactIndex/>
</div>
  </React.StrictMode>
);


