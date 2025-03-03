const express = require("express");
const cors = require("cors");
const app = express();

const { initializeDatabase } = require("./db/db.connection");
const { MyBooks } = require("./models/book.model");

app.use(cors());
app.use(express.json());

initializeDatabase();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/myBooks", async (req, res) => {
  try {
    const allbooks = await MyBooks.find();
    res.json(allbooks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

async function createBook(newBook){
  try{
      const book = new MyBooks(newBook)
      const saveBook = await book.save()
      return saveBook
  }catch(error){
      console.log(error)
  }    
}

app.post("/myBooks", async (req,res)=>{
  try{
      const savedBooks = await createBook(req.body)
      res.status(201).json({message: "New book created successfully.", book: savedBooks})
  }catch(error){
     res.status(500).json({error: "Failed to create new book data."})
  }
})

app.delete("/myBooks/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await MyBooks.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
