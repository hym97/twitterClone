import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {User} from "./main/SideBar/Item/commons/User";

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {avatar:"", userName:"psyduck", certified:true}
root.render(
  <React.StrictMode>
    <App />
      <User user = {user} size={"sm"}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
