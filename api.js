const DO = require('do-wrapper');

const client = new DO(process.env.DO_TOKEN, 10);

function getAccountDetails() {
  return client.account().then(data => data.body.account);
}

const API = {
  client,
  getAccountDetails,
};

export default API;
