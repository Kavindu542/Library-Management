const Book = require('../models/book')
const mongoose = require("mongoose");
const multer = require('multer');


// Configure storage for PDF uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fieldSize: 25 * 1024 * 1024, // Increase field size limit to 25MB (adjust as needed)
    fileSize: 25 * 1024 * 1024,  // Increase file size limit to 25MB (adjust as needed)
  },
});

const addBook = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body
    console.log("Request Files:", req.files); // Log the uploaded files

    const { name, isbn, authorId, genreId, isAvailable, summary, photoUrl } = req.body;
    const pdfFile = req.files["pdfFile"] ? req.files["pdfFile"][0] : null;
    const photoFile = req.files["photo"] ? req.files["photo"][0] : null;

    const pdfUrl = pdfFile ? `/uploads/${pdfFile.filename}` : null;
    const photoUrlFinal = photoFile ? `/uploads/${photoFile.filename}` : photoUrl;

    console.log("PDF URL:", pdfUrl);
    console.log("Photo URL:", photoUrlFinal);

    const newBook = new Book({
      name,
      isbn,
      authorId: mongoose.Types.ObjectId(authorId),
      genreId: mongoose.Types.ObjectId(genreId),
      isAvailable,
      summary,
      photoUrl: photoUrlFinal,
      pdfUrl,
    });

    console.log("New Book:", newBook);
    await newBook.save();
    res.status(201).json({ success: true, newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ success: false, error: 'Error adding book' });
  }
};


//const upload = multer({ storage: storage });
const getBook = async (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId, (err, book) => {
    if (err) {
      return res.status(400).json({success: false, err});
    }

    return res.status(200).json({
      success: true,
      book
    });
  });
}

const getAllBooks = async (req, res) => {
  Book.aggregate([{
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "_id",
      as: "author"
    },
  },
    {
      $unwind: "$author"
    },
    {
      $lookup: {
        from: "genres",
        localField: "genreId",
        foreignField: "_id",
        as: "genre"
      },

    },
    {
      $unwind: "$genre"
    },]).exec((err, books) => {
    if (err) {
      return res.status(400).json({success: false, err});
    }

    return res.status(200).json({
      success: true,
      booksList: books
    });
  });
}

// const addBook = async (req, res) => {
//   const newBook = {
//     ...req.body,
//     genreId: mongoose.Types.ObjectId(req.body.genreId),
//     authorId: mongoose.Types.ObjectId(req.body.authorId)
//   }
//   console.log(newBook)
//   Book.create(newBook, (err, book) => {
//     if (err) {
//       return res.status(400).json({success: false, err});
//     }

//     return res.status(200).json({
//       success: true,
//       newBook: book
//     });
//   })
// }

const updateBook = async (req, res) => {
  const bookId = req.params.id
  const updatedBook = req.body

  Book.findByIdAndUpdate(bookId, updatedBook, (err, book) => {
    if (err) {
      return res.status(400).json({success: false, err});
    }

    return res.status(200).json({
      success: true,
      updatedBook: book
    });
  })
}

const deleteBook = async (req, res) => {
  const bookId = req.params.id

  Book.findByIdAndDelete(bookId, (err, book) => {
    if (err) {
      return res.status(400).json({success: false, err});
    }

    return res.status(200).json({
      success: true,
      deletedBook: book
    });
  })
}

module.exports = {
  getBook,
  getAllBooks,
  addBook,
  updateBook,
  deleteBook
}
