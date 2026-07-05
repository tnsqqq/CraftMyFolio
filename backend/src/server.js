import "dotenv/config";
import { connectDB } from "./config/db.js";
import { app } from "./app.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : port;
    console.log(`Server is running on http://localhost:${actualPort}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.warn(`Port ${port} is busy. Trying a free port...`);
      startServer(0);
      return;
    }

    console.error("Server error:", error);
    process.exit(1);
  });
};

const requestedPort = Number(process.env.PORT);
startServer(Number.isFinite(requestedPort) && requestedPort > 0 ? requestedPort : 4040);
