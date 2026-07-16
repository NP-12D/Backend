const isAdmin = (req, res, next) => {
//   console.log(req.headers);
  let admin = req.headers.admin;
  if (!admin || admin !== "admin") {
    return res
      .status(403)
      .json({ message: "only admin can delete or update Products" });
  }
  next();
};
module.exports = isAdmin;
