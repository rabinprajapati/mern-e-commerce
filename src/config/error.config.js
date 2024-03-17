const router = require("express").Router();

router.use((req, res, next) => {
  next({ code: 404, message: "ROute not found" });
});

router.use((error, req, res, next) => {
  console.log("error section");
  const code = error.code ?? 500;
  const message = error.message ?? "Server Error";
  res.status(code).json({ result: result, message: message, meta: null });
});

module.exports = router;
