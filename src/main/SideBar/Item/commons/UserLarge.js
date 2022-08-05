import React from "react";
import "./UserLarge.css"
export default class UserLarge extends React.Component{

    avatar_test = "https://seeklogo.com/images/P/psyduck-logo-BD70DF6321-seeklogo.com.png";
    userName_test = {userId:"xxt7578", userDisplayedName:"xxt"};
    certified_test = true;

    // test_data = {avatar:this.avatar_test, userName:this.userName_test, certified: this.certified_test, promoted:true}


    render() {
        const {user} = this.props
        const {avatar, userName, certified,promoted} = user;
        console.log(userName)
        const {userId,userDisplayedName} = userName;
        let PromotedComp = () => {return null}
        if(promoted){
            PromotedComp = () => {
                return (
                    <div className={"UserLarge-promoted-container"}>
                        <div className={"UserLarge-promoted-icon"}>
                            <svg viewBox={"0 0 24 24"} style={{height:"17px", width:"17px"}}>
                                <g>
                                    <path d={'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z'}>
                                    </path>
                                </g>
                            </svg>
                        </div>

                        <span>Promoted</span>
                    </div>
                )
            }
        }
        return (
            <div className={"UserLarge-container"}>

                    <div className={"UserLarge-avatar"} style={{backgroundImage:`url(${avatar})`}}>

                    </div>


                <div className={"UserLarge-name-container"}>
                    <div className={"UserLarge-container-first-line"}>

                    <span className={"UserLarge-name-container-first-line-text"}>
                        {userDisplayedName}
                    </span>

                        <div className={"UserLarge-cert"} style={{display:certified ? "inline-block" : "none"}}>
                            <svg viewBox={"0,0,24,24"} height={"21.5px"} width={"21.5px"} >
                                <g>
                                    <path
                                        d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className={"UserLarge-name-id"}>
                        <span>@{userId}</span>
                    </div>
                    {PromotedComp()}
                </div>
            </div>
        )
    }
}