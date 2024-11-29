const express = require('express');
const router = express.Router();
const UserModel = require('../Models/User');

const getProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User  not found' });
    }
    res.json(user.profile);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User  not found' });
    }
    user.profile = req.body;
    await user.save();
    res.json(user.profile);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

router.get('/api/auth/profile', getProfile);
router.put('/api/auth/profile', updateProfile);

module.exports = router; // Export the router directly