const { CreateLinkController } = require("../../../handlers/controllers");
const { CreateLinkService } = require("../../../services");
const { LinkMongoRepository } = require("../../../database/repositories");

function makeCreateLinkController() {
  const linkRepository = new LinkMongoRepository();
  const createLinkService = new CreateLinkService({ linkRepository });
  const controller = new CreateLinkController({ createLinkService });

  return controller.handle.bind(controller);
}

module.exports = makeCreateLinkController;
