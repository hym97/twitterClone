import React from "react";
import SearchBarItem from "./SearchBarItem/SearchBarItem";
import "./SearchBarPanel.css"

export default class SearchBarPanel extends React.Component{
    psyduck = {avatar:`https://www.pngitem.com/pimgs/m/177-1772639_psyduck-pokemon-character-vector-art-pokemon-png-psyduck.png`,
        userName:{userId:"Psyduck#0054", userDisplayedName:"Psyduck"}, certified:true, time:"4 hours ago",promoted:true,
        link:"#", desc:"this is a psyduckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjdsiojfodshfushfufhdsuhfshhoahofsuahoudashiua"};

    repeat = (arr, n) => Array(n).fill(arr).flat();
    searchResult = this.repeat([{user:this.psyduck}],10)
    textGroup = this.repeat([{group:{groupName:"HelloWorld", link:"#"}}],3)
    testData =[...this.textGroup, ...this.searchResult]


    render(){
        // const {searchResult, currInput} = this.props
        const {currInput} = this.props
        const searchResult = this.testData
        if(!currInput){
            return (
                <div className={"SearchBarPanel-container"}>
                    <div className={"SearchBarPanel-no-result-text-container"}>
                     <span>
                        Try searching for people, topics, or keywords
                    </span>
                    </div>

                </div>
            )
        }else{
            const Items = searchResult.map((obj,idx) => {
                return (
                    <div key={idx}>
                        <SearchBarItem {...obj}></SearchBarItem>
                    </div>
                )
            })
            return (
                <div className={"SearchBarPanel-container"}>
                    {Items}
                    <div className={"SearchBarItem-hover SearchBarPanel-go-to"} >
                        <span>
                            Go to @{currInput}
                        </span>
                    </div>
                </div>

            )
        }

    }
}