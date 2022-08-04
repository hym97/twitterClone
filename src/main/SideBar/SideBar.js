import React from "react";
import Item from "./Item/Item";
import "./SideBar.css"

export default class SideBar extends React.Component{



    render(){
        const {SideBarHeader, items} = this.props

        const itemsComps = items.map((obj, key) =>{
            const {header,content,footer,meta} = obj
            return (
                <Item header = {header} content={content} footer={footer} meta={meta} key={key}></Item>
            )
        })
        return(
            <div className={"Sidebar-container"}>
                <div className={"Siderbar-Header"}>
                    <span>{SideBarHeader}</span>
                </div>
                {itemsComps}
                <div className={"SideBar-showmore"}>
                    <a>
                        <span>Show more</span>
                    </a>

                </div>
            </div>

        )
    }
}