//////////////////////////////
// DEPENDENCIES
//////////////////////////////
require("dotenv").config();
const { PORT = 3000, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan")


//////////////////////////////
// MIDDLEWARE
//////////////////////////////
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


//////////////////////////////
// DATABASE CONNECTION
//////////////////////////////
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.connection
    .on("open", () => console.log("connected to mongoose"))
    .on("close", () => console.log("disconnected from mongoose"))
    .on("error", (error)=> console.log(error));

/////////////////////
//model
////////
const bookmarkSchema = new mongoose.Schema(
    {
      name: String,
      url: String,
    },
    { timestamp: true }
  );
  
  const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

//////////////////////////////
// ROUTES
//////////////////////////////

// Test Route
app.get("/", (req, res) => {
    res.send("App is working")
})

// Index Route 
app.get("/bookmarks", async (req, res) => {
    try{
        res.json(await Bookmark.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

// Create Route
app.post("/bookmarks", async(req, res) => {
    try{
        res.json(await Bookmark.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

// Update Route
app.put("/bookmarks/:id", async (req, res) => {
    try{
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error) {
        res.status(400).json({error})
    }
})

// Delete Route 
app.delete("/bookmarks/:id", async (req, res) => {
    try{
        res.json(await Bookmark.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})


//////////////////////////////
// LISTENER
//////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
