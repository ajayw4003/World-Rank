import React from 'react';
import classes from "./SearchInput.module.css";
import SearchRounded from '@material-ui/icons/SearchRounded';

const SearchInput = ({onChange}) => {
    return (
        <div className = {classes.search}>
            <SearchRounded className = {classes.icon}/>
            <input onChange = {onChange} type = "text" placeholder = "search by Name , Region"/>
        </div>
    );
};

export default SearchInput;