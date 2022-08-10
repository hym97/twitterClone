import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {firstPart,secondPart,footerInfo} from "./testData";
import RightSideBar from "./main/SideBar/RightSideBar";
import Signin from "./AuthModule/Signin/Signin";
import SignInPwd from "./AuthModule/Signin/SignInPwd";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
    <Routes>
        <Route path="/flow"
               element={<Signin/>}/>
        <Route path= "/flow/pwd"
              element ={<SignInPwd/>}/>
        <Route path="/"
               element ={<RightSideBar firstPart={firstPart} secondPart={secondPart} footerInfo = {footerInfo}/>}/>

    </Routes>
</Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
