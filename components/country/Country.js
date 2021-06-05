import React from 'react';
import Topbar from "./Topbar";
import CoutryList from "./CountryList";
import classes from "./Country.module.css";

const Country = ({countries}) => {
    return (
        <div className ={classes.container}>
            <Topbar/>
            <CoutryList store = {countries}/>
        </div>
    );
};

export default Country;