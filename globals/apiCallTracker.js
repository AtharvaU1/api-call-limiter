let apiCallCount = 0;
setInterval(() => {
  console.log(`Resetting apiCallCount from ${apiCallCount} to 0`);
  apiCallCount = 0;
}, 60000);

module.exports = {
  getApiCallCount: () => apiCallCount,
  incrementApiCallCount: () => ++apiCallCount,
  resetApiCallCount: () => {
    apiCallCount = 0;
  },
};
