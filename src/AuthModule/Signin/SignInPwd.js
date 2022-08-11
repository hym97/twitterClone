import React, {useState} from "react";
import SignInPanel from "./commons/SignInPanel";
import SignInInputDiv from "./commons/SignInInputDiv";
import AuthButton from "./commons/AuthButton";
import {Link, useNavigate} from "react-router-dom";
import "./SigninPwd.css"
import { useLocation } from 'react-router-dom'
import { Auth } from 'aws-amplify';


export default function SignInPwd(){
    const location = useLocation()
    let navigate = useNavigate()
    const {userName} = location.state
    const [password,setPwd] = useState(0)


    async function signIn() {
        try {
            const user = await Auth.signIn(userName, password);
            console.log("success")
            console.log(user)
            navigate("/");
        } catch (error) {
            console.log('error signing in', error);
        }
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
                        <SignInInputDiv labelText={"Password"} prtHandler={setPwd}
                                        type={"password"} options={{size:"lg"}}/>
                        <Link to={"/flow/forgot"}>
                            <div style={{fontSize:"14px", color:"rgb(29, 155, 240)"}}>
                                <span>Forgot password?</span>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className={"SignInPwd-container-bottom"}>
                    <div className={"Signin-container-base"} >
                        <div style={{width:"424px", height:"109px"}} onClick={signIn}>
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