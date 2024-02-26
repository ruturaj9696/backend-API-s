import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors package
import listingRouter from './routes/listing.route.js';

dotenv.config();
const app = express();

// Body parsing middleware
app.use(express.json()); // Parse JSON bodies

// CORS middleware
app.use(cors());

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.json({ msg: "Hello World!" });
});

// Mount the userListingRouter
app.use('/api/listing', listingRouter);
