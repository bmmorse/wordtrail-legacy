const express = require('express');
const axios = require('axios');
// const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');
require('dotenv').config();

// import functions for the API calls
const api = require('./API/helpers');

const app = express();

if (process.env.NODE_ENV === 'production') {
  // app.use(cors());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(express.static('client/build'));

app.use('/api', require('./API/routes'));
app.use('/test', require('./API/testRoute'));

/**
 * By default i.e. if the route is not one of the above routes
 * defined explicitly, serve the react app (passing control to React router)
 */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

/**
 * Error Handling
 *
 * send a 400 error status back to our front end
 * (i.e. to run the code inside .catch() of the frontend http request)
 */
app.use((err, req, res, next) => {
  if (err) {
    // send the error to the client
    res.sendStatus(400);
    console.log(err.stack);
    console.log('***** ERROR *****');
  } else {
    next();
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} || ${PORT}`);
});
