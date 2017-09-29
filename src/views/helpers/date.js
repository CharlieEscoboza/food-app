function getCurrentDate() {
  var date = new Date();
  return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;
}

module.exports = getCurrentDate;
