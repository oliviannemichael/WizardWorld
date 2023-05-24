var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});
// import browser router
import { BrowserRouter } from "react-router-dom";

// render the router
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

module.exports = router;
