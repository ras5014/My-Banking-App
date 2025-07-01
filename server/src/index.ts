import express from "express";
import type { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import logger from "./utils/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFoundHandler.js";

const app = express();

// Middlewares

// Enable CORS for all routes
app.use(cors());

// User Helmet for security
app.use(helmet());

// Use Morgan & Winston for logging
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message: string) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to My Banking App API");
});

// Error Handling Middleware
app.use(errorHandler);
// Not Found Middleware
app.use(notFound);

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
