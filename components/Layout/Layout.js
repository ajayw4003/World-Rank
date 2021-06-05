import React from 'react';
import Header from "./Header";
import calsses from "./Layout.module.css"

const Layout = (props) => {
    return (
        <div>
            <Header />
            <main className = {calsses.main}>{props.children}</main>
        </div>
    );
};

export default Layout;