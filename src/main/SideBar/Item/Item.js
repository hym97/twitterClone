import React from "react";
import "./Item.css"
import ItemHeader from "./commons/ItemHeader";
import Footer from "./commons/Footer";

export default class Item extends React.Component {
    state = {textState:false};
    timeId = null;
    displayText = () =>{
        this.timeId = setTimeout(() => {
          this.setState({textState:true});
            // console.log("callBackCalled");
            // console.log(this.state.textState)
        }, 500)
        // console.log("MouseOver")
    }
    hideText = () =>{
        // console.log("mouseOuttriggered")
        if(this.timeId){
            clearTimeout(this.timeId);
            this.timeId = null;
        }
        this.setState({textState:false})
    }

    render() {
        const {header, content, footer, meta} = this.props;
        console.log("Items")
        console.log(header)
        console.log(meta)
        let realFooter;
        let realMeta;
        if (footer) {
            realFooter = (footer) => {
                console.log(footer);
                return (<Footer {...footer}></Footer>);
            }
        }else{
            realFooter = () =>{
                return null;
            }
        }
        if (meta) {
            realMeta = (meta) => {
                return (<div className={"Item-meta"}>
                    <img src={`meta`}/>
                </div>)
            }
        } else {
            realMeta = () => {
                return (
                    <div  className={"Item-dots-hover"} onMouseEnter={this.displayText} onMouseLeave={this.hideText}>
                        <div className={"Item-dots"}>
                            <svg viewBox={"0 0 24 24"} style={{fill: "currentcolor", color: "rgb(83, 100, 113)}"}}>
                                <g>
                                    <circle cx="5" cy="12" r="2"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <circle cx="19" cy="12" r="2"></circle>
                                </g>
                            </svg>
                        </div>
                        <div style={{display: this.state.textState ? "flex" : "none"}} className={"Item-more"}>
                        <span>
                            More
                        </span>
                        </div>
                    </div>
            )
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
