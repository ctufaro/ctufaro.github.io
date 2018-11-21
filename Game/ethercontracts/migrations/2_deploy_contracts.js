var ApprovalContract = artifacts.require("./ApprovalContract");
var BettingContract = artifacts.require("./Betting");

module.exports = function(deployer) {
  //deployer.deploy(ApprovalContract);
  deployer.deploy(BettingContract);
}
