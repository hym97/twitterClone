import React from "react";
import "./UserLarge.css"
import UserName from "./UserName";
export default class UserLarge extends React.Component{

    avatar_test = "https://seeklogo.com/images/P/psyduck-logo-BD70DF6321-seeklogo.com.png";
    userName_test = {userId:"xxt7578", userDisplayedName:"xxt"};
    certified_test = true;

    // test_data = {avatar:this.avatar_test, userName:this.userName_test, certified: this.certified_test, promoted:true}


    render() {
        const {user} = this.props
        const {avatar, userName, certified,promoted} = user;
        // const {userId,userDisplayedName} = userName;
        let PromotedComp = () => {return null}
        if(promoted){
            PromotedComp = () => {
                return (
                    <div className={"UserLarge-promoted-container"}>
                        <div className={"UserLarge-promoted-icon"}>
                            <svg viewBox={"0 0 24 24"} style={{height:"17px", width:"17px"}}>
                                <g>
                                    <path d={'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z'}>
                                    </path>
                                </g>
                            </svg>
                        </div>

                        <span>Promoted</span>
                    </div>
                )
            }
        }
        return (
            <div className={"UserLarge-container"}>

                    <div className={"UserLarge-avatar"} style={{backgroundImage:`url(${avatar})`}}>

                    </div>



                <div className={"UserLarge-name-container"}>
                    <UserName {...userName} certifed={certified}/>
                    {PromotedComp()}
                </div>
            </div>



        )
    }
}