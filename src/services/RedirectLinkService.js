const { LinkNotFound } = require("../exceptions");

class RedirectLinkService {
  constructor({ linkRepository }) {
    this.linkRepository = linkRepository;
  }

  async getTarget({ path }) {
    const link = await this.linkRepository.findByPath(path);

    if (!link) throw new LinkNotFound();

    link.click();
    await this.linkRepository.update(link);

    return link.target;
  }
}

module.exports = RedirectLinkService;
