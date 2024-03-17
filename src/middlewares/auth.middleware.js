const authCheck = (req, res, next) => {
  console.log("I am auth check");
  next();
};

module.exports = authCheck;
