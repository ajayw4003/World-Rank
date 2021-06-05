import React from 'react';
import Details from "../../components/country/Details";

const CountryDetail = (props) => {
    console.log(props);
    return (
        <div>
            <Details country = {props}/>
        </div>
    );
};

export async function getStaticPaths(){
    const res = await  fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();
    return {
        fallback: false,
        paths: countries.map(country => ({
            params: {
                id: country.alpha3Code,
            }
        }))
        
        
    }
}

export async function getStaticProps(context){
    const res = await  fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();
    const countryCode = context.params.id;
    const selectedCountry = countries.filter(country => country.alpha3Code === countryCode);

    return {
        props:selectedCountry[0],
        revalidate: 5,
    }
}


export default CountryDetail;

