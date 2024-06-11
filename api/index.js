const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")

dotenv.config();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Serve static files from the 'uploads' directory
app.use(express.static('uploads'));

// Parse JSON requests
app.use(express.json());

// Route for authentication
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute)

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Exit the application if MongoDB connection fails
    process.exit(1);

}


);
