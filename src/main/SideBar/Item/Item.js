import React from "react";
import "./Item.css"
import ItemHeader from "./commons/ItemHeader";
import Footer from "./commons/Footer";

export default class Item extends React.Component{


    render(){
        debugger
        const {header,content,footer} = this.props;
        if(footer){
            return (
                <div className={"Item-container"}>
                    <ItemHeader {...header}></ItemHeader>
                    <div className={"Item-content-container"}>{content}</div>
                    <Footer {...footer}></Footer>
                </div>
            )
        }else{
            return (
                <div className={"Item-container"}>
                    <ItemHeader {...header}></ItemHeader>
                    <div className={'Item-content-container'}>{content}</div>
                </div>
            )
        }
    }

}