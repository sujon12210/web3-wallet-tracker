const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.etherscan.io/api";

async function fetchBalance(address) {
  const url = `${BASE_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return { balance: data.result / 1000000000000000000 };
}

async function fetchTransactions(address) {
  const url = `${BASE_URL}?module=account&action=txlist&address=${address}&sort=desc&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return { transactions: data.result.slice(0, 5) };
}

module.exports = { fetchBalance, fetchTransactions };
