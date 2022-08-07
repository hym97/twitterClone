import React from "react";
import "./SideBarFooterItem.css"
export default class SideBarFooterItem extends React.Component{
    render() {
        const {name,link} = this.props
        return (
            <a href={link}>
                <div className={"SideBarFooterItem-container"}>
                    <span>
                    {name}
                    </span>
                </div>
            </a>

        )
    }
}