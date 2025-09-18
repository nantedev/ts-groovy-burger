import styled from "styled-components";
import { LoginContainer } from "./LoginContainer";
import LoginFooter from "./LoginFooter";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="left-side">
        <LoginContainer />
      </div>
      <div className="page-bottom">
        <LoginFooter />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .left-side {
    grid-area: 2 / 1 / 5 / 3;
  }

  .page-bottom {
    grid-area: 5 / 1 / 6 / 5;
  }

  ::before {
    content: "";
    background: url("/images/burger-right.jpg") rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: right;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
