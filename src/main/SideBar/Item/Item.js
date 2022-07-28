import React from "react";
import "./Item.css"
import ItemHeader from "./commons/ItemHeader";
import Footer from "./commons/Footer";

export default class Item extends React.Component {


    render() {
        debugger
        const {header, content, footer, meta} = this.props;
        let realFooter = null;
        let realMeta;
        if (footer) {
            realFooter = (footer) => {
                console.log(footer)
                return (<Footer {...footer}></Footer>)
            }
        }
        if (meta) {
            realMeta = (meta) => {
                return (<div className={"Item-meta"}><img
                    src={"https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png"}/>
                </div>)
            }
        } else {
            realMeta = () => {
                return (<div className={"Item-dots"}>
                    <svg viewBox={"0 0 24 24"} style={{fill: "currentcolor", color: "rgb(83, 100, 113)}"}}>
                        <g>
                            <circle cx="5" cy="12" r="2"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                            <circle cx="19" cy="12" r="2"></circle>
                        </g>
                    </svg>
                </div>)
            }
        }


        return (
            <div className={"Item-wrapper"}>
                <div className={"Item-with-meta"}>
                    <div className={"Item-container"}>
                        <ItemHeader {...header}></ItemHeader>
                        <div className={"Item-content-container"}>{content}</div>
                        {realFooter(footer)}
                        {realMeta(meta)}
                    </div>
                </div>
            </div>
        )
    }
}
