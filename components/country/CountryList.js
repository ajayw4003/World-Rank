import React from 'react';
import classes from "./CountryList.module.css";
import { useRouter } from 'next/router'

const CountryList = ({store}) => {
    const router = useRouter();
    const handleClick = (code) => {
        router.push('./'+code);
        console.log(code);
    }
    return (
        <div>
            {store.map(country => (
                <div 
                    key = {country.name} 
                    className = {classes.country} 
                    onClick = {() => handleClick(country.alpha3Code)}>

                    <div className ={classes.name}>
                        <img src = {country.flag} alt = "flag img"/>
                        {country.name}
                    </div>
                    <div className = {classes.population}>{country.population}</div>
                </div>
            ))}
        </div>
    );
};

export default CountryList;