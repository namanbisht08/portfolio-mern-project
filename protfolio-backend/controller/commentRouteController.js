const express = require('express');
const mongoose = require("mongoose");
const HttpError = require("../utils/httpError");

const comment = require("../model/commentSchema");
const router = express.Router();

router.post("/comment", async (req, res) => {
  const newComment = new comment({
    comment: req.body.comment,
    postedBy: req.body.username || "Anonymous User",
  });

  try {
    await newComment.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("comment failed to saved", 500);
    return next(error);
  }
});
module.exports = router;
