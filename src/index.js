import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {User} from "./main/SideBar/Item/commons/User";
import ItemHeader from "./main/SideBar/Item/commons/ItemHeader";
import Item from "./main/SideBar/Item/Item";

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {avatar:"", userName:"psyduckpsyduckpsyduckpsyducj", certified:true, time:"4 hours ago"};
const trendings = {prefix:"HelloWorld", suffix:"this is ymh"};
const header = {user};
const content = "jiolhguokgiyku gyiuguyguiyyfiu fuygyugigyu";
const footer = {content:"2213131 tweets"}
root.render(
  <React.StrictMode>
      <App />
      <ItemHeader user = {user}></ItemHeader>
      <ItemHeader trendings = {trendings}></ItemHeader>
      <User user = {user} size={"sm"}/>
      <Item header={header} content ={content} footer={footer}></Item>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
