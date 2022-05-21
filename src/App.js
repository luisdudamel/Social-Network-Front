import Header from "./components/Header/Header";
import { Userlist } from "./components/UsersList/UsersList";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="main-container container-fluid">
          <Header></Header>
          <Userlist></Userlist>
        </div>
      </div>
    </>
  );
}

export default App;
