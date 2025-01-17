import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import unitsRouter from "./routes/unit";
import authRouter from "./routes/auth";
import progressRouter from "./routes/progress";
import lessonRouter from "./routes/lesson";

dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());

// Set Proxy
app.set("trust proxy", 1); 

// Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000" || "http://localhost:8081",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization,user-id",
    credentials: true, // Allow credentials (cookies)
  })
);

// Route setup
app.use("/api/units", unitsRouter);
app.use("/api/auth", authRouter);
app.use("/api/progress", progressRouter);
app.use("/api/lesson", lessonRouter);

// Default route for 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Route /
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default app;
