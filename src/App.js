import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Forms/LoginForm";
import Header from "./components/Header/Header";

import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="main-container container-fluid">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Navigate to="/users/login" />} />
            <Route path="/users/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
