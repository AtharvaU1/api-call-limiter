var express = require("express");
var router = express.Router();
const { getApiCallCount } = require("../globals/apiCallTracker");
const callLimiter = require("../utils/callLimiter");

const call_me = (input) => {
  return `Function executed with input: ${input}`;
};

const limitedCallMe = callLimiter(call_me);

router.get("/:id", function (req, res, next) {
  limitedCallMe(req.params.id);
  const apiCallCount = getApiCallCount();
  res.send(`Api call count ${apiCallCount}`);
});

module.exports = router;
