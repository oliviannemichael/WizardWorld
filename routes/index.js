var express = require("express");
var router = express.Router();
// import browser router
import { BrowserRouter } from "react-router-dom";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

// render the router
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));  

module.exports = router;
