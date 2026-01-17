const api = require("./api");

async function getBalance(address) {
  const data = await api.fetchBalance(address);
  return data.balance;
}

async function getTransactions(address) {
  const data = await api.fetchTransactions(address);
  return data.transactions;
}

module.exports = { getBalance, getTransactions };
