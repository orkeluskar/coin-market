## Getting Started

1. Clone the repo
   ```
   git clone https://github.com/orkeluskar/coin-market.git
   ```
2. Change the current directory
   ```
   cd coin-market
   ```
3. Assuming you have [docker](https://www.docker.com/) installed, build the docker container using:
   ```
   sudo docker build -t coin-market .
   ```
4. Run the container with arguments of the currency e.g: bitcoin, ethereum, etc
   ```
   sudo docker run coin-market bitcoin
   ```


### Sample Output


1. With a valid currency name (Ignores case)
   ```
   > sudo docker run test bitcoin
   ```

   ```
   > coin-market@1.0.0 start /usr/src/app
   > node server.js "bitcoin"
   
   bitcoin's 
   price: $7018.20166667 
   market cap: $120982125464
   ```

2. With a empty argument
   ```
    > sudo docker run test
   ```

   ```
    > coin-market@1.0.0 start /usr/src/app
    > node server.js ""


    /usr/src/app/server.js:6
    if (currency === undefined || currency === "") throw 'Please provide currency name';
                                                ^
    Please provide currency name
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! coin-market@1.0.0 start: `node server.js ""`
    npm ERR! Exit status 1
    npm ERR! 
    npm ERR! Failed at the coin-market@1.0.0 start script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /root/.npm/_logs/2018-08-29T17_15_00_237Z-debug.log

   ```

3. With invalid name

   ```
   sudo docker run test invalidCoin
   ```

   ```
    > coin-market@1.0.0 start /usr/src/app
    > node server.js "invalidCoin"

    invalidCoin wasn't found. Please try one of the currencies listed here: https://api.coinmarketcap.com/v2/listings/

   ```