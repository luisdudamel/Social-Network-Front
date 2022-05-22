import { Navigate, Route, Routes } from "react-router-dom";
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
            <Route path="/users/login" />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
