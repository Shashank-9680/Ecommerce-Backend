const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};
exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDVlNWQ0MDM0M2YwMTNhZGVlNWZhNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNzQwMDcxfQ.ftN_xk_DtS5yc3gRYVznWqL6Knwf7hNvaTHUxuZHZyE";
  return token;
};
