import { loginThunk } from "./usersThunks";

describe("Given a userThunks thunk", () => {
  describe("When its invoked with username 'luis1' and password '1234'", () => {
    test("Then it should call the setItem method, with the token received", async () => {
      const req = {
        username: "luis1",
        password: "1234",
      };

      const res = await loginThunk(req);
      const expectedTokenSet = await sessionStorage.getItem("token");

      expect(expectedTokenSet).not.toBeNull();
    });
  });
});
