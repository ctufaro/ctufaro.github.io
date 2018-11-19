var Bets = function(){
    var bettingInstance;
    var contractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';

    var Init = function(){
        if ( typeof web3 != 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
        }

        bettingInstance  = new web3.eth.Contract(abi, contractAddress);

        GetUserAsync().then(res => {
            new Vue({
                el: '.wallet-address',
                data: {
                  address: res[0]
                }
            })            
        })

        GetAmountAsync().then(res => {
            console.log(res);
        });

    }();

       

    async function GetAmountAsync(){
        var user = await GetUserAsync();
        return await bettingInstance.methods.AmountOne().call({from: user[0]}).then(async (result) => {
            return await result / 10000;
        });
    }

    async function GetUserAsync(){
        return await web3.eth.getAccounts(async (error,acc) => { 
            return await acc; 
        });
    };
   

}();