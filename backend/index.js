const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const booksRoute = require('./Routes/booksroutes');
const UserModel = require('./Models/User');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken'); // Ensure you import jwt
require('dotenv').config(); // Load environment variables
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend's origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/books', booksRoute);

// Ping Route for Health Check
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Change Password Endpoint
// Change Password Endpoint
app.post('/auth/changePassword', async (req, res) => {
  const { email } = req.body;
  
  try {
      const user = await UserModel.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      // Setup Nodemailer Transporter
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
          }
      });

      const mailOptions = {
          from: process.env.EMAIL,
          to: user.email,
          subject: 'Password Change Request',
          text: `To change your password, use this link: http://localhost:3000/changePassword/${token}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
              return res.status(500).json({ message: 'Error sending email' });
          }
          console.log('Email sent: ' + info.response);
          return res.status(200).json({ message: 'Password change email sent successfully' });
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
