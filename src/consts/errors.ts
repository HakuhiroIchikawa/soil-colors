class ArgumentError extends Error {
  static {
    this.prototype.name = "ArgumentError";
  }

  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

class ParseError extends Error {
  static {
    this.prototype.name = "ParseError";
  }

  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export {
  ArgumentError,
  ParseError,
}
