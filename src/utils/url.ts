export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://flashboards.herokuapp.com/"
    : "http://localhost:4321";
