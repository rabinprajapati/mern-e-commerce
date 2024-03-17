const router = require("express").Router();

router.post("/create", (req, res) => {
  res.json({ result: "Brand created", meta: null });
});
router.get("/:id", (req, res) => {
  let brandId = req.params.id;
  res.json({ result: "brandId is : " + brandId, meta: null });
});
router.get("/", (req, res) => {
  let data = { id: 1, name: "rabin" };
  res.json({ data: data, message: "Brand data", meta: null });
  res.send("sdlfjlj");
});
router.delete("/delete/:id", (req, res) => {
  res.json({ message: "Brand delete", meta: null });
});

module.exports = router;
