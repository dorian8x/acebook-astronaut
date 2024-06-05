const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.get("/", UsersController.getUserById);
router.post("/", UsersController.create);
router.get("/:user_id", UsersController.getUserById);
router.put("/:user_id", UsersController.updateProfile);

module.exports = router;
