const jwt = require("jsonwebtoken");

// middleware to check the logged user's token is valid or experied
module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Invalid token",
    });
  }
};
