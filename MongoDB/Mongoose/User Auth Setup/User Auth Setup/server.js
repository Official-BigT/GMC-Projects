import http from "http";
import app from "./app/app.js";
// allowing express to connect to the NODE Underlying HTTP server
// Telling node server to forward every incoming http request it receives to the express app object for processing
const server = http.createServer(app);

server.listen(5680, () => {
  console.log("Server is running on port 5680");
});