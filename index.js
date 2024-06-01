const express = require("express");
const connectDB = require("./config/bd");
const cors = require("cors");

const ContactRoutes = require("./Routes/ContactRoutes");



connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',  // Autoriser uniquement les requêtes provenant de http://localhost:3000
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
}));
app.listen(4000, () => {
    console.log('Server started on port 4000');
  });

// routes
app.use("/", ContactRoutes);


