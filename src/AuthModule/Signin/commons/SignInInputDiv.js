import React from "react";
import AuthButton from "./AuthButton";
import {Link} from "react-router-dom";
import "../Signin.css"

export default class SignInInputDiv extends React.Component {
    state = {activeOutline: false};
    focusInput = React.createRef();

    returnPrtVal = () => {
        const Version = this.props.HandlerVersion
        const currVal = this.focusInput.current.value;

        // this.props.prtHanlder.bind(this)
        if(Version === "old"){
            this.props.prtHandler(currVal, this.props.name);
        }else{
            this.props.prtHandler(currVal)
        }

    }

    parseOptions = () => {
        let size;
        let variant;
        if(this.props.options){
            size = this.props.options?.size
            size = size ? this.props.options.size : "sm"
            variant = this.props.options?.variant ? this.props.options.variant : "default"
        }else{
            size = "md";
            variant = "default";
        }
        return {size, variant}
    }

    parseWidth= (size) => {
        if(size === "lg") return {width:"430px"};
        return {};
}
    render() {
        const labelText = this.props?.labelText ? this.props.labelText : "Phone, email, or username";
        const type = this.props?.type ? this.props.type : "text";
        const options = this.props?.options ? this.props.options : null;
        const {size,variant} = this.parseOptions();
        const widthOption = this.parseWidth(size)

        if (variant !== "default"){
            const value = this.props.value
            return (
                <div className={"Signin-container-base"}>
                    <div className={"Signin-input-container"} style={widthOption}>
                        <div className={"input-outline-disabled"} style={widthOption}>
                            <div className={"input-position-disabled"} style={widthOption}>
                                <input type={type} value={value} disabled={true}/>
                                <label>{labelText}</label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"Signin-container-base"}>
                    <div className={"Signin-input-container"} style={widthOption}>
                        <div className={"input-outline"}
                             style={{outline: this.state.activeOutline ? "rgb(29,155,240) solid" : "" ,...widthOption}}
                             onClick={() => this.focusInput.current.focus()}>
                            <div className={"input-position"} style={widthOption}>
                                <input type={type} placeholder={" "}
                                       onFocus={() => this.setState({activeOutline: true})}
                                       onBlur={() => this.setState({activeOutline: false})}
                                       ref={this.focusInput} onChange={this.returnPrtVal}
                                style={{width: type === "password"? "374px" : "",
                                    inputSecurity:type === "password"?"none":""}}/>
                                <label>{labelText}</label>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }


    }
}