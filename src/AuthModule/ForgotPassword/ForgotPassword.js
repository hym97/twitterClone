import React, {useState} from "react";
import SignInPanel from "../Signin/commons/SignInPanel";
import SignInInputDiv from "../Signin/commons/SignInInputDiv";
import AuthButton from "../Signin/commons/AuthButton";
import "./ForgetPassword.css"
import {getChildVal} from "../utils/utils";
export function ForgotPassword(props){
    const [userName, setUserName] = useState(null);
    const text = props?.labelText ? props.labelText : "Find your Twitter account";
    const mainComp = () => {
        return (
                <div>
                    <div className={"ForgotPassword-top-container"}>
                        <div className={"ForgotPassword-top-wrapper"}>
                            <div className={"ForgotPassword-text"}>
                                {text}
                            </div>
                            <div className={"ForgotPassword-input-wrapper"}>
                                <SignInInputDiv options={{size:"lg"}}
                                                labelText={"Enter yor email, phone number, or username"}
                                                prtHandler={setUserName}/>
                            </div>
                        </div>
                    </div>
                    <div className={"ForgotPassword-search-container"}>
                        <div className={"ForgotPassword-search-wrapper"}>
                            <div className={userName ? "ForgotPassword-search-button active" : "ForgotPassword-search-button"}
                                 style={{opacity:userName? "1" : ""}}>

                                <AuthButton text={"Search"} />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    return (
        <SignInPanel mainContent={mainComp}/>
    )
}