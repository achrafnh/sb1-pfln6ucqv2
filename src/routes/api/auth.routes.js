const express = require('express');
const AuthController = require('../../controllers/auth.controller');
const { verifyToken } = require('../../middleware/auth.middleware');
const { authLimiter } = require('../../middleware/rateLimiter.middleware');

const router = express.Router();

router.post('/register', authLimiter, AuthController.register);
router.post('/login', authLimiter, AuthController.login);
router.post('/refresh', authLimiter, AuthController.refresh);
router.post('/logout', verifyToken, AuthController.logout);

module.exports = router;