import styled from "styled-components";

const NavigationStyled = styled.nav`
  height: 110px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  .nav {
    &__content-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default NavigationStyled;
