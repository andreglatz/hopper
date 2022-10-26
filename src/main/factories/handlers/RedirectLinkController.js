const { RedirectLinkController } = require("../../../handlers/controllers");
const { RedirectLinkService } = require("../../../services");
const { LinkMongoRepository } = require("../../../database/repositories");

function makeRedirectLinkController() {
  const linkRepository = new LinkMongoRepository();
  const redirectLinkService = new RedirectLinkService({ linkRepository });
  const controller = new RedirectLinkController({ redirectLinkService });

  return controller.handle.bind(controller);
}

module.exports = makeRedirectLinkController;
