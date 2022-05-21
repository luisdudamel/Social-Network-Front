import { usersForTest } from "../../utilities/usersList";
import usersReducer, { loadUsersActionCreator } from "./usersSlice";

describe("Given a usersReducer reducer", () => {
  describe("When it receives a list of users, and a load action", () => {
    test("Then it should return the same list of users", () => {
      const usersList = usersForTest;

      const usersLoadAction = loadUsersActionCreator(usersList);
      const loadedList = usersReducer(usersList, usersLoadAction);

      expect(loadedList).toEqual(usersList);
    });
  });
});
