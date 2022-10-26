const express = require("express");
const router = require("./routes");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
  }

  start() {
    this.app.use(express.json());
    this.app.use(router);

    const message = `🚀 Server started on port ${this.port}`;
    this.app.listen(this.port, () => console.log(message));
  }
}

module.exports = Server;
