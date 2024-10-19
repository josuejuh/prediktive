// utilities.js
class Utilities {
    static sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  
  module.exports = Utilities;