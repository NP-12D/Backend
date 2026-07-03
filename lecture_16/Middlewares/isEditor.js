export const isEditor = (req, res, next) => {
  console.log(req.headers);
  const iseditor = req.headers.iseditor;
  const isadmin = req.headers.isadmin;

  if (iseditor === "editor" || isadmin === "admin") {
    next();
  } else
    res
      .status(403)
      .json({ message: "you are not editor or admin", data: null });
};
