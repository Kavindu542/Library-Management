// Import required modules
const express = require("express")
const router = express.Router();
const multer = require("multer");

// Import functions from controller
const {
    getBook,
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController')

router.get("/getAll", (req, res) => getAllBooks(req,res))   

router.get("/get/:id", (req, res) => getBook(req, res))

//router.post("/add", (req, res) => addBook(req, res))

router.put("/update/:id", (req, res) => updateBook(req, res))

router.delete("/delete/:id", (req, res) => deleteBook(req, res))



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//router.post("/add", upload.single("pdfFile"), (req, res) => addBook(req, res));
router.post("/add", upload.fields([
    { name: "pdfFile", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]), (req, res) => addBook(req, res));

module.exports = router;
