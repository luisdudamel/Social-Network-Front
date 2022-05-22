import axios from "axios";

export const loginThunk = (loginData) => async () => {
  const { data: token } = await axios.post(
    `${process.env.REACT_APP_API_URL}users/login/`,
    loginData
  );

  localStorage.setItem("token", token);
};
