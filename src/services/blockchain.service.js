const Web3 = require('web3');
var web3 = new Web3();
const provider = new web3.providers.HttpProvider('http://localhost:8545', 0, process.env.ETHERBASE, process.env.PASSWORD);
var account;
var accounts;
// Step 1: Get a contract into my application
var json = require("../truffle/build/contracts/SimpleBallot.json");
// Step 2: Turn that contract into an abstraction I can use
var contract = require("truffle-contract");
var Ballot;

module.exports = {
  init: function () {
    web3.setProvider(provider);
    Ballot = contract(json);
    // Step 3: Provision the contract with a web3 provider
    Ballot.setProvider(provider);

    web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        console.log('There was an error fetching your accounts.');
      } else if (accs.length == 0) {
        console.log('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly. Or make some accounts on your node.');
      } else {
        accounts = accs;
        account = accs[0];
        console.log('Main account for sending transactions is : ' + account);
      }
    });
  },

  getAccounts: function () {
    return web3.eth.accounts;
  },

  vote: function (proposal) {
    var meta;
    return Ballot.deployed().then(function (instance) {
      meta = instance;
      return meta.contract.justVote(proposal, { from: account });
    }).then(function (result) {
      console.log('Vote succesfull: ' + result);
      return result;
    }).catch(function (err) {
      console.log('something went wrong during voting' + err);
      return 'something went wrong during voting: ' + err;
    });
  },
  getVoteCount: function (proposal) {
    var meta;
    return Ballot.deployed().then(function (instance) {
      meta = instance;
      return meta.getVoteCount(proposal);
    }).then(function (result) {
      console.log('Votecount proposal ' + proposal + ' is: ' + result);
      return result;
    }).catch(function (err) {
      console.log('something went wrong during getVoteCount: ' + err);
      return ('something went wrong during getVoteCount: ' + err);
    });
  }
  ,

  winningProposal: function () {
    var meta;
    return Ballot.deployed().then(function (instance) {
      meta = instance;
      return meta.winningProposal();
    }).then(function (result) {
      console.log('winning proposal: ' + result);
      return result;
    }).catch(function (err) {
      console.log('something went wrong during winningProposal: ' + err);
      return ('something went wrong during winningProposal: ' + err);
    });
  }

}