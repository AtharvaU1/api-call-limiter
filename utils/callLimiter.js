const {
  getApiCallCount,
  incrementApiCallCount,
} = require("../globals/apiCallTracker");

const callLimiter = (func) => {
  const cache = {};
  return function caller(...args) {
    const currentCount = getApiCallCount();
    if (currentCount < 15) {
      incrementApiCallCount();
      const strigifiedArgs = JSON.stringify(args);
      return (cache[strigifiedArgs] = func(...args));
    } else {
      // either defer calling for the next minute when the api count has been reset
      setTimeout(() => {
        return caller(...args);
      }, 60000);

      // OR
      // return the results from the cache
      if (cache[strigifiedArgs]) {
        return cache[strigifiedArgs];
      }
    }
  };
};

module.exports = callLimiter;
