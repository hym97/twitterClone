import React from "react";
import {Link} from "react-router-dom";


export const Main = () => {
    return (
        <>
            <h1>This is main page</h1>
            <h2>Hello World</h2>
            <Link to={"/flow"}>Login</Link>
        </>

        )
}