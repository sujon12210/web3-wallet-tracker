const { getBalance, getTransactions } = require("./wallet");

async function start() {
  const address = process.argv[2];

  if (!address) {
    console.log("Please enter a wallet address");
    return;
  }

  const balance = await getBalance(address);
  const txs = await getTransactions(address);

  console.log("Wallet:", address);
  console.log("Balance:", balance, "ETH");
  console.log("Recent Transactions:");
  console.log(txs);
}

start();
