import express from "express";
import type { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Middlewares
// Enable CORS for all routes
app.use(cors());

// Routes

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to My Banking App API");
});

const PORT = process.env.PORT || 3000;

const server = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

server().catch((error) => {
  console.error("Server initialization failed:", error);
});
