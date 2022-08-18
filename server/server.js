const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bp = require('body-parser');
const errorHandler = require('./middleware/error');
const path = require('path');

// ROUTE IMPORTS
const registerRoute = require('./routes/register');
const postAdRoute = require('./routes/postAd');
const signInRoute = require('./routes/signIn');
const getAdsRoute = require('./routes/getAds');
const getAdRoute = require('./routes/getAd');
const getUsersRoute = require('./routes/getUsers');
const checkUserRoute = require('./routes/checkUser')
const getImagesRoute = require('./routes/getImages');
const bookAdRoute = require('./routes/bookAd');
const deleteUserRoute = require('./routes/deleteUser');
const deleteAdRoute = require('./routes/deleteAd');

// Connecting to mongoDB
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/register', registerRoute);
app.use('/postAd', postAdRoute);
app.use('/signIn', signInRoute);
app.use('/getAds', getAdsRoute);
app.use('/getAd', getAdRoute);
app.use('/getUsers', getUsersRoute)
app.use('/checkUser', checkUserRoute);
app.use('/getImages', getImagesRoute);
app.use('/bookAd', bookAdRoute);
app.use('/deleteUser', deleteUserRoute);
app.use('/deleteAd', deleteAdRoute)

app.get("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use(errorHandler);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}
);

process.on('unhandledRejection', (err, promise) => {
    console.log('Encountered error: ' + err);
})