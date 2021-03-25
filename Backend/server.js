require("./boot/requires");
require('./boot/dbConnection');

const express = require('express');
const errorHandler = require('./middlewares/error');
const jwt = require('jsonwebtoken');

const Admin = require("./modules/admin/routes/AdminRoute");
const Author = require("./modules/author/routes/AuthorRoute");
const ResponseCode = require("./responses-code")
const ResponseMessage = require("./responses-message")

const booksRouter = require('./modules/book/routes/BookRoutes')
const Access = require("./modules/access/routes/AccessRoutes");
const reviewRouter = require('./modules/review/routes/ReviewRoute');

const UserRouter = require("./modules/user/routes/UserRoute");

const categoryRouter = require('./modules/category/routes/CategoryRoute')
const ratingRouter = require('./modules/rating/routes/RatingRoute');
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//end point for book
app.use("/book", booksRouter);

//end point for admin
app.use("/admin" , Admin);

//end point for author
app.use("/author" , Author);

//end point for user
app.use("/users" , UserRouter);

//end point for access
app.use("/access" , Access);

//end point for review
app.use("/review" , reviewRouter);

//end point for category
app.use("/category" , categoryRouter);

//end point for rating
app.use("/rating" , ratingRouter);

app.listen(process.env.PORT , (err) => {
    if(err)
        console.log("the port " + process.env.PORT  + " is busy");
    else
        console.log("the server started correcttly on port " + process.env.PORT );
});

// error handeler middleware
app.use(errorHandler);