class LinkAlreadyExists extends Error {
  constructor(message) {
    super(message);
    this.name = "AlreadyLinkExists";
    this.message = message;
  }
}

module.exports = LinkAlreadyExists;
