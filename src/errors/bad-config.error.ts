export class BadConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadConfigurationError';
  }
}
