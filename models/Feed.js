const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
  },
  post: {
    type: Object,
    required: true
  },
});

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = Feed;