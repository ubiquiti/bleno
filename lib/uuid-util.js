module.exports.removeDashes = function(uuid) {
  if (uuid) {
    uuid = uuid.replace(/-/g, '');
  }

  return uuid;
};

module.exports.removeColons = function(mac) {
  if (mac) {
    mac = mac.replace(/:/g, '');
  }

  return mac;
}
