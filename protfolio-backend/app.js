const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//const commentRouteController = require("./controller/commentRouteController");
const HttpError = require("./utils/httpError");
const  contact= require("./model/contactMe");

const port = 3001;
app.use(bodyParser.json());

//app.use("/comment", commentRouteController);

app.post("/contactMe", async (req, res) => {
  const contactMe = new contact({
    clientName: req.body.clientName,
    email: req.body.email,
    projectDetails: req.body.projectDetails,
    projectTopic: req.body.projectTopic,
  });

  try {
    await contactMe.save();
    res.json({"message": "respose saved successfully"})
  } catch (err) {
    console.log(err);
    const error = new HttpError("failed to upload details", 500);
    return next(error);
  }
});

//mongoose.connect('<********* ENTER YOUR CONNECTION STRING HERE ***********>',
mongoose.connect('mongodb+srv://namanbisht08:namsb54321@mernstackcluster.x1yo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    });
  }).catch(err => {
    console.log(err);
  });