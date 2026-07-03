export const isEditor = (req, res, next) => {
  console.log(req.headers);
  let editor = req.headers.editor;
  if (!editor || editor !== "editor") {
    return res
      .status(403)
      .json({ message: "editor can only update status" });
  }
  next();
};
