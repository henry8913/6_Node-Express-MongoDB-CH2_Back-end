
module.exports = function (req, res, next) {
    const token = req.headers.authorization;
    if (token === process.env.MY_SECRET_TOKEN) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  