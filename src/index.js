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
// import SearchBar from "./main/SideBar/SearchBar/SearchBar";
// import UserSearchBar from "./main/SideBar/Item/commons/UserSearchBar";
// import SearchBarItem from "./main/SideBar/SearchBar/SearchBarItemPanel/SearchBarItem/SearchBarItem";
// import SearchBarPanel from "./main/SideBar/SearchBar/SearchBarItemPanel/SearchBarPanel";

// const user = {avatar:"", userName:"psyduckpsyduckpsyduckpsyducj", certified:true, time:"4 hours ago",promoted:true, link:"#"};
// const trendings = {prefix:"HelloWorld", suffix:"this is ymh"};
// const header = {user};
// const header2 = {trendings};
// const content = "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.";
// const footer = {content:"2213131 tweets"}
// const Items = [{header:header, content, footer:null, meta:1}, {header:header2, content, footer, meta:false}]
// const psyduck = {avatar:`https://www.pngitem.com/pimgs/m/177-1772639_psyduck-pokemon-character-vector-art-pokemon-png-psyduck.png`,
//     userName:{userId:"Psyduck#0054", userDisplayedName:"Psyduck"}, certified:true, time:"4 hours ago",promoted:true,
//     link:"#", desc:"this is a psyduckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjdsiojfodshfushfufhdsuhfshhoahofsuahoudashiua"};
//
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
