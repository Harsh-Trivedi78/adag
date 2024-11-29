const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../Controllers/userController.js'); 


router.post('/', async (req, res, next) => {
  try {
    await createUser(req, res);
  } catch (error) {
    next(error); 
  }
});


router.get('/', async (req, res, next) => {
  try {
    await getUsers(req, res);
  } catch (error) {
    next(error);
  }
});


router.get('/:id', async (req, res, next) => {
  try {
    await getUserById(req, res);
  } catch (error) {
    next(error);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    await updateUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await deleteUser(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
