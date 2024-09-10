const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS middleware configuration to allow all origins temporarily
app.use(cors({
  origin: '*',  // Allow all origins temporarily
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to DB");
    console.log(`Server is running on port ${PORT}`);
  });
});


// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const router = require('./routes');

// const app = express();

// // List of allowed origins
// const allowedOrigins = [
//   'https://ecommerce-app-flax-mu.vercel.app',  
//   'https://ecommerce-k8gq6kxbs-mohammad-yameens-projects.vercel.app', 
//   'https://ecommerce-l91dskjm0-mohammad-yameens-projects.vercel.app', 
//   process.env.FRONTEND_URL                     
// ];

// // CORS middleware configuration
// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or Postman requests)
//     if (!origin) return callback(null, true);

//     // Check if the incoming request's origin is in the allowedOrigins list
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api", router);

// const PORT = process.env.PORT || 8080;

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log("Connected to DB");
//     console.log(`Server is running on port ${PORT}`);
//   });
// });
