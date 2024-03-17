const router = require("express").Router();
const authCheck = require("../../middlewares/auth.middleware");
const authCtrl = require("./auth.controller");
const {
  validator,
  paramValidator,
} = require("../../middlewares/validator.middleware");
const {
  registerSchema,
  tokenSchema,
  passwordSchema,
} = require("./auth.request");
const uploader = require("../../middlewares/uploader.middleware");

//register process
router.post(
  "/register",
  uploader.array("image"),
  validator(registerSchema),
  authCtrl.register
);
router.get(
  "/verify/:token",
  paramValidator(tokenSchema),
  authCtrl.verifyActivationToken
);
router.post(
  "/activation/:token",
  paramValidator(tokenSchema),
  validator(passwordSchema),
  authCtrl.activateUser
);

//login process
router.post("/login", authCtrl.loginUser);
router.get("/me", authCheck, authCtrl.getLoggedInUser);
router.get("/logout", authCheck, authCtrl.logoutUser);

//forget password
router.post("/forget-password", authCtrl.sendEmailForForgetPassword);
router.get(
  "/verify-password-token/:token",
  paramValidator(tokenSchema),
  authCtrl.verifyForgetPasswordToken
);
router.post(
  "/set-password/:token",
  paramValidator(tokenSchema),
  authCtrl.updatePassword
);

module.exports = router;
