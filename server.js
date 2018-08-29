'use strict';
const https = require('https');
const fetch = require('node-fetch');
const currency = process.argv[2];

// Validation
if (currency === undefined || currency === "") throw 'Please provide currency name';

// Getting prices
(async () => {
    try{
        const tickers = await fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array');
        const results = await tickers.json();
    
        for (let i = 0; i < results.data.length; i++) {
            
            // if the currency name is found, display the price and market cap
            if (results.data[i].name.toUpperCase() === currency.toUpperCase()) {
                console.log(`${currency}'s \nprice: $${results.data[i].quotes.USD.price} \nmarket cap: $${results.data[i].quotes.USD.market_cap}`)
                return
            }
        }
    }
    catch(e){
        console.error(e)
    }
    

    console.error(`${currency} wasn't found. Please try one of the currencies listed here: https://api.coinmarketcap.com/v2/listings/`)
})();