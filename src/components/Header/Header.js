import Select from "react-select";
import styled from "styled-components";

const StyledHeader = styled.div`
  border: solid red;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const options = [
  { value: "friends", label: "Friends" },
  { value: "enemies", label: "Enemies" },
];

const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand active" href="#">
              <img
                src="../../favicon.png"
                alt="Isdigram Logo"
                width="30"
                height="30"
              ></img>
            </a>
          </div>
        </nav>
        <a>Home</a>
        <a>My friends</a>
        <a>My Profile</a>
        <Select options={options}></Select>
      </StyledHeader>
    </>
  );
};

export default Header;
