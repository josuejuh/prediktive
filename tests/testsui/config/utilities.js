class Utilities {
  //Function to implements waits (it will be used only on debugging not for final tests)
    static sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  
  module.exports = Utilities;