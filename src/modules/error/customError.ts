class CustomError extends Error {
  constructor(message) {
    super(message);
  }
  response?: {
    data: any;
    status: number;
    headers: string;
  };
}

export default CustomError;
