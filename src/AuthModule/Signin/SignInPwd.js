import React, {useState} from "react";
import SignInPanel from "./commons/SignInPanel";
import SignInInputDiv from "./commons/SignInInputDiv";
import AuthButton from "./commons/AuthButton";
import {Link} from "react-router-dom";
import "./SigninPwd.css"
import { useLocation } from 'react-router-dom'


export default function SignInPwd(){
    debugger
    const location = useLocation()
    const {userName} = location.state
    const [password,setPwd] = useState(0)

    const defaultData = [{link:"#",text:"Continue with Google", icon:"Google"},
        {link:"#",text:"Continue with Apple", icon:"Apple"},{link:"#",text:"Next", icon:null},
        {link:"#",text:"Forgot password?", icon:null}]
    const fetchData = () =>{
        console.log("helloworld")
    }
    const mainContent = () => {
        return (
            <div>
                <div className={"SignInPwd-container-top"}>
                    <div className={"SignInPwd-container-inputSpace"}>
                        <div className={"SignInPwd-header-container"}>
                    <span>
                        Enter Your Password
                    </span>
                        </div>

                        <SignInInputDiv value={userName} options={{variant:"disabled", size:"lg"}}/>
                        <SignInInputDiv name={"password"} prtHandler={setPwd}
                                        type={"password"} options={{size:"lg"}}/>
                    </div>
                </div>
                <div className={"SignInPwd-container-bottom"}>
                    <div className={"Signin-container-base"} >
                        <div style={{width:"424px", height:"109px"}} onClick={fetchData}>
                            <div className={"SignInPwd-container-login"}>
                                <div className={"AuthButton-pwd-login blackHoverStyle"}>
                                    <AuthButton {...{link:null, text:"Log in", icon:"null"}}/></div>
                            </div>
                        </div>

                    </div>
                    <div className={"Signin-container-base"}>
                        <div className={"SignInPwd-container-final"}>
                            <span>Don't have an account?   </span>
                            <Link to={"../"} style={{color:"rgb(29,155,240)", marginLeft:"3px"}}>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <SignInPanel mainContent={mainContent}/>

    )
}