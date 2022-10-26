const Link = require("../entities/Link");
const { LinkAlreadyExists } = require("../exceptions");

class CreateLinkService {
  constructor({ linkRepository }) {
    this.linkRepository = linkRepository;
  }

  async create({ path, target }) {
    const alreadyExists = await this.linkRepository.findByPath(path);

    if (alreadyExists) throw new LinkAlreadyExists("Link already exists");

    const link = new Link({ path, target });

    await this.linkRepository.create(link);

    return link;
  }
}

module.exports = CreateLinkService;
