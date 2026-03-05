const express = require('express');
const router = express.Router();
const {submitData,generatePDF}=require("../controllers/userController");
router.post("/submit",submitData);
router.get("/pdf/:id",generatePDF);
module.exports = router;