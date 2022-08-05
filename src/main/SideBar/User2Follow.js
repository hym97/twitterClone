import React from "react";
import UserLarge from "./Item/commons/UserLarge";
import "./User2Follow.css"

export default class User2Follow extends React.Component{
    // avatar_test = "https://seeklogo.com/images/P/psyduck-logo-BD70DF6321-seeklogo.com.png";
    // userName_test = {userId:"xxt7578", userDisplayedName:"xxt"};
    // certified_test = true;
    //
    // test_data = {avatar:this.avatar_test, userName:this.userName_test, certified: this.certified_test, promoted:true}
    render(){
        const {user} = this.props
        console.log(user)
        const {promoted} = user
        console.log(promoted)
        return (
                <div className={"User2Follow-container"} style={{height: promoted ? "75px" : ""}}>
                    <UserLarge user = {user}></UserLarge>
                    <div className={"User2Follow-follow-box"}>
                        <span>
                        Follow
                        </span>
                    </div>
                </div>

        )
    }
}