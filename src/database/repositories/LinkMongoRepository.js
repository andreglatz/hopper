const { MongoClient } = require("mongodb");
const { Link } = require("../../entities");
class LinkMongoRepository {
  constructor() {
    const uri = "mongodb://root:root@localhost:27017/?authMechanism=DEFAULT";
    const client = new MongoClient(uri);

    this.db = client.db("hopper").collection("links");

    this.tableName = process.env.LINKS_TABLE ?? "links";
  }

  async create(link) {
    await this.db.insertOne(link.toJSON());
  }

  async update(link) {
    await this.db.updateOne({ path: link.path }, { $set: link.toJSON() });
  }

  async findByPath(path) {
    const link = await this.db.findOne({ path });

    return new Link({ ...link });
  }
}

module.exports = LinkMongoRepository;
