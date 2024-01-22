const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

const adminMiddleWare = (req, res, next) => {
    if (req.body.authority === "admin") {
        next();
    } else {
        res.send("Sorry, you're not cool enough.");
    }
}

userRouter.post('/login', userController.loginAuthCheck);
userRouter.post('/register', userController.registerNewUser);
userRouter.get('/', adminMiddleWare, userController.showAllUsers);

module.exports = userRouter;