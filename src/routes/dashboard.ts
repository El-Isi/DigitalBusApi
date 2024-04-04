import express from "express";
import path from "path";

const publicPath = path.join(process.cwd(), "public");
const router = express.Router();

router.use(express.static(publicPath));

router.get(/^\/(?!api).*/, (req, res) =>
  res.sendFile(path.join(publicPath, "index.html"))
);

export default router;
