import React from "react";
import SideBarFooterItem from "./SideBarFooterItem/SideBarFooterItem";
import "./SideBarFooter.css"
export default class SideBarFooter extends React.Component{
    render() {
        const {footerInfo} = this.props
        const FootBarItems = footerInfo.map((obj,key) => {
            return (
                    <div key={key}>
                        <SideBarFooterItem {...obj}/>
                    </div>
                )

        })
        return (
            <div className={"SideBarFooter-container"}>
                <div className={"SideBarFooter-link-container"}>
                    {FootBarItems}
                </div>
                <div className={"SideBarFooterItem-container"}>
                    <span>
                        © 2022 HymDev
                    </span>
                </div>
            </div>
        );
    }
}