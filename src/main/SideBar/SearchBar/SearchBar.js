import React from "react";
import "./SearchBar.css"
import SearchBarPanel from "./SearchBarItemPanel/SearchBarPanel";
export default class SearchBar extends React.Component{

    state={inputFocused:false, inputVal:null};
    changeOutline = () =>{
        const currState = this.state.inputFocused
        this.setState({inputFocused:!currState})
    };
    panel = ()=>{return null;};
    bindVal = (event) =>{
        this.setState({inputVal: event.target.value ? event.target.value : null})
    }
    render(){
        const {inputFocused, inputVal} = this.state

        const currPanel = () => {
            if (!inputVal) {
                return null;
            } else {
                return (
                    <SearchBarPanel searchResult={""} currInput={inputVal}></SearchBarPanel>
                );
            }
        }
        return (
            <div className={"SearchBar-container-add-padding"}>
                <div className={"SearchBar-container"}
                     style={{borderColor: inputFocused ? "rgb(29,155,240)" : "",
                         backgroundColor: inputFocused ? "white" :""}}>
                    <div className={"SearchBar-icon-container"}>
                        <svg viewBox={"0 0 24 24"} aria-hidden={"true"} className={"SearchBar-icon"}
                             style={{color: inputFocused ? "rgb(29,155,240)" : ""}}>
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={"SearchBar-placeholder-container"}>
                        <input type={"text"} placeholder={"Search Twitter"} className={"SearchBar-placeholder"}
                               onFocus={this.changeOutline} onBlur={this.changeOutline} onChange={e => this.bindVal(e)}/>
                    </div>
                    {currPanel()}
                </div>
            </div>

        )
    }
}
