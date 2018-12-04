https://medium.com/coinmonks/tutorial-create-a-sports-betting-dapp-on-the-ethereum-blockchain-part-2-cd4753afe702
https://medium.com/@olxc/ethereum-and-smart-contracts-basics-e5c84838b19
https://web3js.readthedocs.io/en/1.0/index.html

TRUFFLE COMMANDS:
-web3.eth.sendTransaction({ from:web3.eth.coinbase, to: '0x345ca3e014aaf5dca488057592ee47305d9b3e10', value: web3.toWei(10, "ether")});
-web3.fromWei(web3.eth.getBalance('0x345ca3e014aaf5dca488057592ee47305d9b3e10'));
-web3.fromWei(web3.eth.getBalance('0x627306090abaB3A6e1400e9345bC60c78a8BEf57'),'ether').toString();