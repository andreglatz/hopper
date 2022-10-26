class LinkAlreadyExists extends Error {
  constructor(message) {
    super(message);
    this.name = "LinkAlreadyExists";
    this.message = message;
  }
}

module.exports = LinkAlreadyExists;
