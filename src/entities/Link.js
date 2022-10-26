class Link {
  constructor({ path, target, clicks, createdAt, updatedAt, deletedAt }) {
    this._path = path;
    this._target = target;
    this.clicks = clicks ?? 0;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
    this.deletedAt = deletedAt;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
    this.updatedAt = new Date();
  }

  get target() {
    return this._target;
  }

  set target(value) {
    this._target = value;
    this.updatedAt = new Date();
  }

  click() {
    this.clicks++;
    this.updatedAt = new Date();
  }

  toJSON() {
    return {
      path: this.path,
      target: this.target,
      clicks: this.clicks,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

module.exports = Link;
