import React from "react";


export default class Footer extends React.Component{
    render(){

        const {content} = this.props
        return (
            <div style={ {color: "#536471", fontSize:"14px"}}>
                <span>{content}</span>
            </div>
        )

    }
}