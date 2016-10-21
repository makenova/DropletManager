const DO = require('do-wrapper');

const client = new DO(process.env.DO_TOKEN, 10);

// wrap this because the response is wrapped in an undecessary object
function getAccountDetails() {
  return client.account().then(data => data.body.account);
}

const API = {
  client,
  getAccountDetails,
};

export default API;
