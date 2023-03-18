

const express = require("express");
const server = express();
const PORT = 3001;


const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions)); 


const router = require("./routes/index.js");

server.use(express.json());

server.use("/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
