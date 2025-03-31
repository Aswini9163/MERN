let jwt = require("jsonwebtoken");

let LoginMiddleware = (req, res, next) => {
  let token = req.header("x-token");
  if(!token){
    res.send("no token");
  }
  let decode = jwt.verify(token, "JSONString123");
  req.user=decode.user;
  next();
}

module.exports= LoginMiddleware;