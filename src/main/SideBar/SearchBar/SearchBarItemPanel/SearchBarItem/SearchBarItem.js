import React from "react";
import UserSearchBar from "../../../Item/commons/UserSearchBar";
import "./SearchBarItem.css"

export default class SearchBarItem extends React.Component {

    render() {
        const group = this.props?.group;
        const user = this.props?.user;
        if(group){
            const {groupName,link} = group
            const firstLetter = groupName.slice(0,1)
            const remainWords = groupName.slice(1)
            return (
                <a href={link}>
                    <div className={"SearchBarItem-group-container SearchBarItem-hover"}>
                        <div className={"SearchBarItem-group-icon-container"}>
                            <svg viewBox={"0 0 20.5 20.5"} aria-hidden={"true"} className={"SearchBarItem-group-icon"}>
                                <g>
                                    <path
                                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className={"SearchBarItem-group-text-container"}>
                            <span className={"SearchBarItem-group-first-letter"}>{firstLetter}</span>
                            <span>{remainWords}</span>
                        </div>
                    </div>
                </a>

            )
        }else{
            const {link} = user
            return (
                <a href={link}>
                    <div className={"SearchBarItem-hover"}>
                        <UserSearchBar user={user}></UserSearchBar>
                    </div>
                </a>
            )

        }
    }
}
