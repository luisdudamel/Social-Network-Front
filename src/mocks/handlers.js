import { rest } from "msw";

export const handlers = [
  rest.post("users/login", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
