"use strict";
module.exports = function() {
  const vault = {};

  function getValue(key) {
    if (key === undefined || !(key in vault)) {
      return null;
    }
    return vault[key];
  }

  function setValue(key, value) {
    vault[key] = value;
  }

  return {
    getValue,
    setValue
  };
};
