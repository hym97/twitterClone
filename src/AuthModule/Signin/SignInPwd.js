import React from "react";
import SignInPanel from "./commons/SignInPanel";
import SignInInputDiv from "./commons/SignInInputDiv";
import AuthButton from "./commons/AuthButton";
import {Link} from "react-router-dom";
import "./SigninPwd.css"
import {getChildVal} from "../utils/utils";

export default class SignInPwd extends React.Component{
    constructor(props) {
        super(props);
        this.getChildVal = getChildVal.bind(this)
    }

    defaultData = [{link:"#",text:"Continue with Google", icon:"Google"},
        {link:"#",text:"Continue with Apple", icon:"Apple"},{link:"#",text:"Next", icon:null},
        {link:"#",text:"Forgot password?", icon:null}]

    // getChildVal = (val, name) => {
    //     console.log(val)
    //     this.setState({[name]:val})
    //
    // }
    render() {
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

                        <SignInInputDiv value={"1234"} options={{variant:"disabled", size:"lg"}}/>
                        <SignInInputDiv name={"password"} prtHandler={this.getChildVal}
                                        type={"password"} options={{size:"lg"}}/>
                    </div>
                </div>
                <div className={"SignInPwd-container-bottom"}>
                    <div className={"Signin-container-base"} >
                        <div style={{width:"424px", height:"109px"}}>
                            <div className={"SignInPwd-container-login"}>
                                <div className={"AuthButton-pwd-login blackHoverStyle"}>
                                    <AuthButton {...{link:"#", text:"Log in", icon:"null"}}/></div>
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
        );
    }

    return (
        <SignInPanel mainContent={mainContent}/>
        );
    }

}