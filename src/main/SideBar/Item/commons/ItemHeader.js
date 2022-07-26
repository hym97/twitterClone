import React from "react";
import {User} from "./User";
import "./User.css"

export default class ItemHeader extends React.Component {

    render() {
        // const {header} = this.props
    const {user, trendings} = this.props
        console.log(user)
        if (user) {
            return (
                <div>
                    <User user={user}></User>
                </div>
            )
        } else{
            const {prefix, suffix} = trendings
            if (prefix && suffix){
                return (
                    <div className={"User-container"} style={{fontSize:"14px"}}>
                        <div>
                        <span>
                        {prefix}
                        </span>
                        </div>
                        <div >
                        <span className={"User-dot"}>
                            ·
                        </span>
                        </div>
                        <div>
                        <span>
                            {suffix}
                        </span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className={"User-container"}  style={{fontSize:"14px"}}>
                        <div>
                        <span>
                        {trendings[prefix]}
                        </span>
                        </div>
                    </div>
                )
            }

        }
    }
}