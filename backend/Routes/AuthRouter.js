const { signup,login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const ProfileController = require('../Controllers/ProfileController');
const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
// router.use('/api/auth', ensureAuthenticated, ProfileController);

module.exports = router;