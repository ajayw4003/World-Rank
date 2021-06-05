import React from 'react';
import classes from "./Details.module.css";

const Details = ({country}) => {
    return (
        <div>
            <div className = {classes.img}>
                <img src = {country.flag} alt ={country.name}/>
                <h2>{country.name}</h2>
                <div>{country.region}</div>
            </div>
            <div className = {classes.container}>
                <div className = {classes.div}>
                    <div>Population</div>
                    <div>{country.population}</div>
                </div>
                <div className = {classes.div}>
                    <div>Languages</div>
                    <div className = {classes.name}>{country.languages.map(item => <li key = {item.name}>{item.name}{`,`}</li>)}</div>
                </div>
                <div className = {classes.div}>
                    <div>Currency</div>
                    <div className = {classes.name}>{country.currencies.map(item => <li  key = {item.name}>{item.name}{` `}{`(${item.symbol})`}</li>)}</div>
                </div>
                <div className = {classes.div}>
                    <div>Borders</div>
                    <div className = {classes.name}>{country.borders.map(item => <li  key = {item}>{item}</li>)}</div>
                </div>
            </div>
        </div>
    );
};

export default Details;