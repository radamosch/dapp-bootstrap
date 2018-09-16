/* global describe it artifacts */
const EternalStorage = artifacts.require("EternalStorage")
const Proxy = artifacts.require("Proxy")

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(EternalStorage).then(function() {
    return deployer.deploy(Proxy, EternalStorage.address, accounts[0]);
  });
};
