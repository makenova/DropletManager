var DO = require('do-wrapper')
var client = new DO('process.env.DO_TOKEN', 10)

module.exports = {
  getAccountDetails: getAccountDetails,
}

function getAccountDetails (callback) {
  client.account((err, res, body) => {
    if (err) return callback(err)

    return callback(null, body)
  })
}
