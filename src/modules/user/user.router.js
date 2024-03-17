const router = require("express").Router();

// login check
router.use((req, res, next) => {
  let login = true;
  let user = { id: 123, name: "rabin", role: "admin" };
  req.authUser = user;
  if (login) {
    next();
  } else {
    res.json({
      result: "login failed",
      message: "please login first",
      meta: null,
    });
  }
});
router.post("/create", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "user created",
    message: "User created successfully",
    meta: null,
  });
});
router.get("/", (req, res) => {
  res.json({ result: "User list ", message: "User lists", meta: null });
});
router.put("/:id", (req, res) => {
  let userId = req.params.id;
  res.json({ result: "User updated of UserId  : " + userId, meta: null });
});
router.get("/:id", (req, res) => {
  let data = { id: 1, name: "rabin" };
  res.json({ data: data, message: "User data", meta: null });
});

// role check
router.use((req, res, next) => {
  let user = req.authUser;
  if (user.rol == "admin") {
    next();
  } else {
    res.json({
      result: "deletion failed",
      message: "unauthorized access",
      meta: null,
    });
  }
});

router.delete("/delete/:id", (req, res) => {
  res.json({ message: "User delete", meta: null });
});

module.exports = router;
