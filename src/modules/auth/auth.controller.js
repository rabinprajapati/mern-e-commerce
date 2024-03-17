const Joi = require("joi");
const EmailService = require("../common/mail/email.service");

class authController {
  register = async (req, res, next) => {
    //todo :register user
    //validate
    //db store
    //activation
    //response
    try {
      let payload = req.body;

      // if (req.file) {
      //   payload.image = req.file.filename;
      // }
      if (req.files) {
        const images = req.files.map((img) => img.filename);
        payload.image = images;
      }

      payload.acticationToken = 100;
      payload.status = "notActivated";

      let dbstatus = true;

      if (dbstatus) {
        let message = `Dear ${payload.name}</><br/>
      Your account is verified.`;
        await new EmailService().sendEmail(
          payload.email,
          "Activate your account",
          message
        );
      }

      res.json({ data: payload, result: "User Registered" });
    } catch (error) {
      console.log(error);
      next({ code: 422, message: error.message, result: null });
    }
  };

  verifyActivationToken = (req, res, next) => {
    //todo : verify token
    res.json({ result: "success" });
  };

  activateUser = async (req, res, next) => {
    //todo : activation
    let user = {
      name: "rabin",
      email: "rabin@gmail.com",
      status: "active",
      password: ".....",
    };
    try {
      let success = true;
      if (success) {
        let message = `Dear ${user.name}</><br/>
      Your account is activated.`;
        await new EmailService().sendEmail(
          user.email,
          "Account Activated",
          message
        );

        res.json({
          result: req.body,
          message: "account activated successfully",
          meta: null,
        });
      } else {
        throw {
          code: 422,
          message: "account cannot be activated at this moment",
        };
      }
    } catch (error) {
      next(error);
    }
  };

  loginUser = (req, res, next) => {
    //todo : login process
    res.json({ result: "ksdjfh" });
  };

  getLoggedInUser = (req, res, next) => {
    //todo : get logged in user
    console.log("I am me route");
    res.json({ result: " I am on me route" });
  };

  logoutUser = (req, res, next) => {
    //todo : logout logged in user
  };

  sendEmailForForgetPassword = (req, res, next) => {
    //todo : get email fot fotget password
    //share reset link to reset password
  };

  verifyForgetPasswordToken = (req, res, next) => {
    //todo : set password
  };

  updatePassword = (req, res, next) => {
    //todo : set password fot forget
  };
}
const authCtrl = new authController();

module.exports = authCtrl;
