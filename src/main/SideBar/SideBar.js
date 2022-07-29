import React from "react";
import Item from "./Item/Item";
import "./SideBar.css"

export default class SideBar extends React.Component{



    render(){
        const {headers, items} = this.props

        const itemsComps = items.map((obj, key) =>{
            debugger
            const {header,content,footer,meta} = obj
            console.log(header)
            console.log(content)
            console.log(footer)
            console.log(meta)
            console.log(key)
            return (
                <Item header = {header} content={content} footer={footer} meta={meta} key={key}></Item>
            )
        })
        return(
            <div className={"Sidebar-container"}>
                <div>
                    <span>{headers}</span>
                </div>
                {itemsComps}
            </div>
        )
    }
}