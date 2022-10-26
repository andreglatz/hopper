class LinkNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "LinkNotFound";
    this.message = message || "Link not found";
  }
}

module.exports = LinkNotFound;
