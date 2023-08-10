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
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDNkNmM3ZTZhZWFkMDk0ODliOGVkZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNjQ3NTM2fQ.50Cwq2nfNglVv4RwLh_ooMdVCGhvw15cZJO_PhcH6tg";
  return token;
};
