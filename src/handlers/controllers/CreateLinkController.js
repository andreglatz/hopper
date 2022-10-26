class CreateLinkController {
  constructor({ createLinkService }) {
    this.createLinkService = createLinkService;
  }

  async handle(request, response) {
    const { path, target } = request.body;

    const link = await this.createLinkService.create({ path, target });

    return response.status(201).json(link);
  }
}

module.exports = CreateLinkController;
