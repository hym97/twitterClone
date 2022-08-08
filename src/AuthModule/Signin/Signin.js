import * as React from "react";
import AuthButton from "./commons/AuthButton";
import "./AuthButton.css"
import "./Signin.css"
export default class Signin extends React.Component{
    testData = [{link:"#",text:"Continue with Google", icon:"Google"},
        {link:"#",text:"Continue with Apple", icon:"Apple"},{link:"#",text:"Next", icon:null},
        {link:"#",text:"Forgot password?", icon:null}]


    render(){
        return (
            <div className={"Signin-greyBoard"} style={{height:window.innerHeight+"px", width:window.innerWidth+"px"}}>

                <div className={"Signin-container"}>
                    <div className={"Signin-container-first-row"}>
                        <div className={"icon-delete-container"}>
                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                 style={{width:"22px", height:"22px",fill:"currentcolor"}}>
                                <g>
                                    <path
                                        d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className={"icon-logo-container"}>
                            <svg viewBox="0 0 24 24" aria-label="Twitter" role="img"
                                 style={{width:"38px",height:"58px",fill:"currentcolor"}}>
                                <g>
                                    <path
                                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={"Signin-container-base"}>
                        <div className={"Signin-container-second-row"}>
                            <span>Sign in to Twitter</span>
                        </div>
                    </div>

                    <div className={"Signin-container-base"}>
                        <div className={"Signin-container-third-part"}>
                            <div className={"AuthButton-google"}><AuthButton {...this.testData[0]}/></div>
                        </div>
                    </div>

                    <div className={"Signin-container-base"}>
                        <div className={"Signin-container-third-part"}>
                            <div className={"AuthButton-apple"}><AuthButton  {...this.testData[1]}/></div>
                        </div>
                    </div>
                    <div className={"Signin-container-base"}>
                        <div className={"Signin-container-with-or"}>
                            <div className={"line-container-left"}>
                                <div className={"dotted-line"}></div>
                            </div>
                            <div className={"place-center"}>
                                <span>or</span>
                            </div>

                            <div className={"line-container-right"}>
                                <div className={"dotted-line"}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type={"text"}/>
                        </div>
                        <div className={"AuthButton-next"}> <AuthButton {...this.testData[2]}/></div>

                        <div className={"AuthButton-base"}> <AuthButton {...this.testData[3]}/></div>

                        <div><span>Dont have an account</span>
                        <a>sign up</a></div>
                    </div>
                    </div>

            </div>

        )
    }
}