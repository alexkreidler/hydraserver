var cors = require("cors");

module.exports = cors({
  origin: "*",
  methods: "GET,PUT,OPTIONS,POST,DELETE",
  exposedHeaders: ["Link", "Content-Location", "Location"],
  allowedHeaders: [
    "Accept",
    "Origin",
    "Content-type",
    "X-Requested-With",
    "Authorization"
  ]
});
