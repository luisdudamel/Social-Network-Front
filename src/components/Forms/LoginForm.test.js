import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When its invoked", () => {
    test("Then it should render a form with a button with the text 'login'", async () => {
      const expectedText = "Login";

      render(
        <Provider store={store}>
          <LoginForm></LoginForm>
        </Provider>
      );

      const expectedButton = await screen.findByRole("button", {
        msg: "Login",
      });

      expect(expectedButton).toHaveTextContent(expectedText);
    });
  });
});
