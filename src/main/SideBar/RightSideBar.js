import React from "react";
import SideBar from "./SideBar";
import SideBarUser2Follow from "./SideBarUser2Follow";


export default class RightSideBar extends React.Component{
    render(){
        const {firstPart,secondPart} = this.props
        console.log(secondPart)
        return (
            <div>
                <SideBar items={firstPart} sideBarHeader={"What’s happening"}/>
                <SideBarUser2Follow userArr={secondPart} user2FollowHeader={"Who to follow"}/>
            </div>
        )
    }
}