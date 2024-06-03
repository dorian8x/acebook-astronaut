const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.get("/", UsersController.getAllUsers);

router.post("/", UsersController.createUser);

router.get("/profile/:userId", UsersController.getProfile);

router.put("/profile/:userId", UsersController.updateProfile);

module.exports = router;
