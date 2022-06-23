import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react'

function Layout() {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
      }
      else {
        setMode('light');
      }
    }
    return (
        <React.Fragment>
            <Header mode={mode} toggleMode={toggleMode}/>
            <Outlet mode={mode}/>
            <Footer mode={mode}/>
        </React.Fragment>
    );
}

export default Layout;