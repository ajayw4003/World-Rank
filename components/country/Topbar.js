import { KeyboardArrowDownRounded } from '@material-ui/icons';
import React from 'react';
import classes from "./Topbar.module.css";

const Topbar = () => {
    return (
        <div className  = {classes.topbar}>
            <div className = {classes.item}>
                <h3>Countries</h3>
                <KeyboardArrowDownRounded style = {{color: "#00ead3"}} />
            </div>
            <div className = {classes.item}>
                <h3>Population</h3>
                <KeyboardArrowDownRounded style = {{color: "#00ead3"}}/>
            </div>
        </div>
    );
};

export default Topbar;