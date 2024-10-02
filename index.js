import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import path from 'path';  // Import the path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  env  from "dotenv";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

dotenv.config();
env.config();



 //connecting to local database 
 //const db = new pg.Client({
  //user: process.env.PG_USER,
  //host: process.env.PG_HOST,
  //database: process.env.PG_DATABASE,
  //password: process.env.PG_PASSWORD,
  //port: process.env.PG_PORT,
//});

// connecting to the remote database
const db = new pg.Client({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false // Set to true if you're using valid SSL certificates
  }

});
db.connect()
.then(() => {
  console.log('Connected to PostgreSQL');
})
.catch(err => {
  console.error('Connection error', err.stack);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// function to retrive all books in a formatted manner
async function getAllBooks() {
  const result = await db.query("SELECT * FROM book ORDER BY title ASC;");
  /*var formattedBooks = result.rows.map((element) => {
    let formattedDate = new Date(element.date_added).toLocaleDateString(
      "en-US",
      { weekday: "short", year: "numeric", month: "short", day: "numeric" }
    );
    return { ...element, date_added: formattedDate };
  });
  return formattedBooks;*/
  return result;
}

async function getAllBookss() {
  const result = await db.query("SELECT * FROM book ORDER BY rating DESC;");
  return result;
}
// home route landing page 
app.get("/", async (req, res) => {
  console.log("Environment Variables:", process.env);

  let data = await getAllBooks();
  res.render("index.ejs", { books: data.rows });
});

app.get("/rating",async(req,res)=>{
  let data = await getAllBookss();
  res.render("index.ejs", { books: data.rows });
});

// route for showing only a specific book data
app.get("/view/:id", async (req, res) => {
  let id=req.params.id;
  let data = await db.query("SELECT * FROM book WHERE id = $1", [id]);
  res.render("view.ejs", { book: data.rows[0] });
});

// route for rendering book adding page
app.get("/addbook", (req, res) => {
  res.render("addBook.ejs");
});


// this route handles the add request which comes from /add route
app.post("/add", async (req, res) => {
  console.log("Password from environment:", process.env.PASSWORD);
  console.log("Request Body:", req.body);
  const title = req.body.title 
  const author= req.body.auther;
  const date = req.body.dateread;
  const note = req.body.description;
  const rating=req.body.rating;
  const isbn = req.body.isbn;
  const password = req.body.password;
  
  console.log(process.env.PASSWORD)
  if (password == process.env.PASSWORD){  // only if password is correct then any data will be added to database
  try {
    await db.query(
      "INSERT INTO book (title, author, isbn,rating,days, description) VALUES ($1, $2, $3, $4,$5,$6)",
      [title, author, isbn,rating,date,note ]
    );
  } catch (err) {
    console.error("Error adding book:", err.message);
      // Log the error details to better understand the issue
      console.error(err.stack);
    console.log("cant be aded");
  }
}
  res.redirect("/");
});

// route for rendering book edit page
app.get('/edit/:title', async(req, res)=>{
  let title = req.params.title
  let data = await db.query("SELECT * FROM book WHERE title = $1", [title]);
  res.render("edit.ejs", { book: data.rows[0] });
})

// this route handles the edit request which comes from /edit route
app.post("/edit", async (req, res) => {
  const note = req.body.description;
  const id = req.body.bookid;
  const password = req.body.password;
  if (password == process.env.PASSWORD){  // until password doesn't match no changes will happen to the database
  try {
    await db.query(
      "UPDATE book SET description = $1 WHERE id = $2",
      [note, id]
    );
  } catch (err) {
    console.error("Error adding book:", err.message);
      // Log the error details to better understand the issue
      console.error(err.stack);
    console.log("cant be Edited");
  }
} 
  let data = await db.query("SELECT * FROM book WHERE id = $1", [id]);
  res.render("view.ejs", { book: data.rows[0]});
});

// route for rendering book edit page
app.get('/delete/:title', async(req, res)=>{
  let title = req.params.title
  let data = await db.query("SELECT * FROM book WHERE title = $1", [title]);
  res.render("remove.ejs", { book: data.rows[0] });
})

// this route handles the delete  request which comes from /edit route
app.post("/delete", async (req, res) => {
  const id = req.body.bookid;
  const password = req.body.password;
  if (password == process.env.PASSWORD){  // until unless password is unmatched nothing will be deleted
  try {
    await db.query(
      "DELETE FROM book WHERE id = $1",
      [id]
    );
  } catch (err) {
    console.log("cant be Deleted");
  }
}
res.redirect('/');
});


//  this route renders the about page
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log("Server listing on : http://localhost:3000");
});