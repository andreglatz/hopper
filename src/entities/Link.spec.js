const Link = require("./Link");

describe("Link Entity", () => {
  let sut;

  beforeEach(() => {
    const path = "https://www.google.com";
    const target = "https://www.google.com.br";

    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

    sut = new Link({ path, target });
  });

  it("should change updated at when update path", () => {
    jest.useRealTimers();

    sut.path = "https://www.google.com";
    expect(sut.updatedAt).not.toEqual(new Date("2020-01-01"));
  });

  it("should change updated at when update target", () => {
    jest.useRealTimers();

    sut.path = "https://www.google.com";
    expect(sut.updatedAt).not.toEqual(new Date("2020-01-01"));
  });

  it("should change updatedAt and clicks", () => {
    jest.useRealTimers();

    sut.click();

    expect(sut.updatedAt).not.toEqual(new Date("2020-01-01"));
    expect(sut.clicks).toEqual(1);
  });

  it("should return a formated link ", () => {
    expect(sut.toJSON()).toEqual({
      path: "https://www.google.com",
      target: "https://www.google.com.br",
      clicks: 0,
      createdAt: new Date("2020-01-01"),
      updatedAt: new Date("2020-01-01"),
      deletedAt: undefined,
    });
  });

  it("should return a link", () => {
    expect(sut).toEqual({
      _path: "https://www.google.com",
      _target: "https://www.google.com.br",
      clicks: 0,
      createdAt: new Date("2020-01-01"),
      updatedAt: new Date("2020-01-01"),
      deletedAt: undefined,
    });
  });
});
