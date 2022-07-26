import React from "react";

export default class Item extends React.Component{


    render(){
        const {footer} = this.props
        if(footer[exist]){
            <div>
                <ItemHeader></ItemHeader>
                <div>{Content}</div>
                <ItemFooter content={footer[content]}></ItemFooter>
            </div>
        }else{
            return (
                <div>
                    <ItemHeader></ItemHeader>
                    <div>{Content}</div>
                </div>
            )
        }
    }
}