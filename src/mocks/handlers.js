import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4001/users/login/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          token: "token",
        },
      })
    );
  }),
];
