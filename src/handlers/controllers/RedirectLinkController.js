class RedirectLinkController {
  constructor({ redirectLinkService }) {
    this.redirectLinkService = redirectLinkService;
  }

  async handle(request, response) {
    const { path } = request.params;

    const target = await this.redirectLinkService.getTarget({ path });

    return response.status(302).redirect(target);
  }
}

module.exports = RedirectLinkController;
