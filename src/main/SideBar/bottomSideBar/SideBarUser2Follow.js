import React from "react";
import User2Follow from "./User2Follow";
import "./SideBarUser2Follow.css"

export default class SideBarUser2Follow extends React.Component{
    // avatar_test = "https://seeklogo.com/images/P/psyduck-logo-BD70DF6321-seeklogo.com.png";
    // userName_test = {userId:"xxt7578", userDisplayedName:"xxt"};
    // certified_test = true;
    //
    // test_data = {avatar:this.avatar_test, userName:this.userName_test, certified: this.certified_test, promoted:true}
    // test_arr = [this.test_data, this.test_data]

    render(){
        const {userArr, user2FollowHeader} = this.props;
        const UserItems = userArr.map((userInfo, idx) => {
           const {user} = userInfo
            const link = {user}
            return (
                <div className={"SideBarUser2Follow-hover-effect"} key={idx}>
                    <a href={link} style={{textDecoration:"none"}}>
                        <User2Follow user={user} ></User2Follow>
                    </a>
                </div>
                    )
        })
        return (
            <div className={"SideBarUser2Follow-container"} >
                <div className={"SideBarUser2Follow-header"}>
                    <span>
                        {user2FollowHeader}
                    </span>
                </div>

                    {UserItems}


                <div className={"SideBarUser2Follow-showmore SideBarUser2Follow-hover-effect"}>
                    <span>
                        Show more
                    </span>
                </div>
            </div>
        )
    }


}

