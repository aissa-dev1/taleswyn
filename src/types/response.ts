type MessageResponse = {
  success: boolean;
  message: string;
};

type ErrorResponse = MessageResponse;

export { type MessageResponse, type ErrorResponse };
