import React from "react";
import SideBar from "./topSideBar/SideBar";
import SideBarUser2Follow from "./bottomSideBar/SideBarUser2Follow";
import SearchBar from "./SearchBar/SearchBar";
import SideBarFooter from "./SideBarFooter/SideBarFooter";
import "./RightSideBar.css"

export default class RightSideBar extends React.Component{
    state = {fixedSideBar:false}
    componentDidMount() {
        const {bottom} = this.heightDiv.current.getBoundingClientRect()
        this.bottom = bottom
        window.addEventListener("scroll", this.fixSideBar)

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.fixSideBar)
    }

    fixSideBar = () =>{
        const {fixedSideBar}= this.state
        if(!fixedSideBar && window.scrollY >= this.bottom-window.innerHeight){
            this.setState({fixedSideBar:true})
            this.currentScollY = this.bottom-window.innerHeight
        }else if(window.scrollY < this.bottom-window.innerHeight){
            this.setState({fixedSideBar:false})
        }

    }

    // fixSideBar = (e) =>{
    //     console.log("scrolled")
    //     console.log(this.heightDiv)
    //     console.log(e.scrollY)
    // }
    heightDiv= React.createRef();
    render(){
        const {fixedSideBar} = this.state;
        const {firstPart,secondPart,footerInfo} = this.props;
        return (
                <div>
                    <div className={"RightSideBar-container"} ref={this.heightDiv}
                         style={{position:fixedSideBar? "fixed": "", top:fixedSideBar ? -(this.currentScollY) +"px" : ""}}>
                        <div className={"RightSideBar-placeholder"}></div>
                        <SearchBar/>
                        <SideBar items={firstPart} sideBarHeader={"What’s happening"}/>
                        <SideBarUser2Follow userArr={secondPart} user2FollowHeader={"Who to follow"}/>
                        <div >
                            <SideBarFooter footerInfo={footerInfo}/>
                        </div>
                    </div>
                </div>

        )
    }
}