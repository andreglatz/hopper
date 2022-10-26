const Link = require("../entities/Link");
const CreateLinkService = require("./CreateLinkService");
const { LinkAlreadyExists } = require("../exceptions");

describe("CreateLinkService", () => {
  let sut;
  let linkRepository;

  beforeEach(() => {
    linkRepository = { create: jest.fn(), findBypath: jest.fn() };
    sut = new CreateLinkService({ linkRepository });

    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("should call repository with find", async () => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    await sut.create({ path, target });

    expect(linkRepository.findBypath).toHaveBeenCalledWith(path);
  });

  it("should throw an error if link already exists", async () => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    linkRepository.findBypath.mockResolvedValueOnce(new Link({ path, target }));

    await expect(sut.create({ path, target })).rejects.toEqual(new LinkAlreadyExists("Link already exists"));
  });

  it("should call repository with a link", async () => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    await sut.create({ path, target });

    expect(linkRepository.create).toHaveBeenCalledWith(new Link({ path, target }));
  });

  it("should throw an error when repository throws", async () => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    linkRepository.create.mockRejectedValue(new Error("Error"));

    await expect(sut.create({ path, target })).rejects.toThrow(new Error("Error"));
  });

  it("should return a link", async () => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    const link = await sut.create({ path, target });

    expect(link).toEqual(new Link({ path, target }));
  });
});
