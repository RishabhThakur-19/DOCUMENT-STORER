const express = require('express');
const router = express.Router();
const {submitData,generatePDF}=require("../controllers/userController");
const upload=require("../middleware/uploads.js");
router.post("/submit",upload.single("photograph"),submitData);  // TO BE READ FOR MORE UNDERSTANDING
router.get("/pdf/:id",generatePDF);
module.exports = router;
