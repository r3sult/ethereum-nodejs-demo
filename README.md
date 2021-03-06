# ethereum-nodejs-demo - PART 4
Demo with ganache-cli, nodejs, api's to call the contract function and react frontend.
We can vote for 'Ethereum' or 'Hyperledger fabric' on the frontend.
This demo is just to illustrate how to interact with the ethereum blockchain network (ganache-cli), a server and a frontend.

# Prerequisite
You'll need ganache-cli for this to work.

# Start application with react frontend and testprc

1. Install all npm packages by invoking ```npm install```
2. Navigate to the front end ```cd react-frontend```
3. Install the frontend npm packages ```npm install```
4. Go back to your main folder `` cd ../..`` 
5. Start ganache-cli by invoking ```ganache-cli```
6. In a new console, go to /src/truffle ```cd src/truffle```
7. Deploy your contracts ```truffle migrate --reset```
8. Go back to your main folder `` cd ../..`` 
9. Use ``yarn dev`` to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately

# Start application through nodejs without the frontend

1. Install all npm packages by invoking ```npm install``` 
2. Start ganache-cli by invoking ```ganache-cli```
3. In a new console, go to /src/truffle ```cd src/truffle```
4. Deploy your contracts ```truffle migrate --reset```
5. Go back to your main folder `` cd ../..`` 
6. Start the server by ``npm start``
7. Browse to ``http://localhost:3100/api/ballot`` for the winning result
8. Browse to ``http://localhost:3100/api/accounts`` for all the accounts on the network
9. Post to ``http://localhost:3100/api/ballot/vote/{number}`` to vote for a ballot (0 or 1)