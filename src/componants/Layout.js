import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react'

function Layout(props) {
    return (
        <React.Fragment>
            <Header mode={props.mode} toggleMode={props.toggleMode}/>
            <Outlet mode={props.mode}/>
            <Footer mode={props.mode}/>
        </React.Fragment>
    );
}

export default Layout;