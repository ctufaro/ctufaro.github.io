var Contracts = function(){
    var holdingContractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
    
    var Deposit = function(amount){
        if ( typeof web3 != 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
        }

        var holdingInstance  = new web3.eth.Contract(holdABI, holdingContractAddress);
        //var accounts = await web3.eth.getAccounts();
        //await holdingInstance.methods.deposit().send({from: accounts[0], value: web3.utils.toWei(amount,'ether')});
        //console.log("called Deposit"); 
        holdingInstance.methods.transfer('0x1881e6DeD94BC750F0BC9A5f8de52aD727D5D1A4','1').call();
        console.log("called Refund");         
    };

    return {Deposit:Deposit};
   
}();