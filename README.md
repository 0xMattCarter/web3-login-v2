# Demo parse-server Auth

## Run locally (This is from the moralis repo here https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server)

1. Run a mongo-db via `yarn dev:db-start` (use this mongo-db ONLY in development, not in production, see https://github.com/mongodb-js/runner), or run your a mongo-db in any other way
2. Copy `.env.example` to `.env` and fill in the values
3. Change the `API_URL` in `public/script.js` to the url of the server api
4. Run `yarn dev` to run the server locally

Now your server is running locally with the following endpoints:

- Client: `localhost:1337` (or any other port you set in `.env`)
- Parse Server: `localhost:1337/server` (or any other port/endpoint you set in `.env`)
- Parse Dashboard: `localhost:1337/dashboard` (or any other port you set in `.env`)
- API: `localhost:1337/api` (or any other port you set in `.env`)

Now you can authenticate via MetaMask as long as you have the MetaMask browser extention installed in the browser.

## Notes

- This code is built on a clone of Moralis's demo parse server repo
- Things like `./public` are from the demo but are replaced by `./client`
  - There may be other code not used from it as well

## Running the backend

- run `npm run dev` to start the backend on port 1337

## Running the frontend

- `cd` to `./client` and run `npm run dev` to start the next.js app
  - login is at `localhost:3000/signin`
