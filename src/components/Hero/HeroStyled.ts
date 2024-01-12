import styled from "styled-components";

const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .hero {
    &__content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__main-title {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.mainSize};
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;

    .hero {
      &__image {
        width: 50%;
      }

      &__content-wrapper {
        margin-right: 30px;
      }
    }
  }
`;

export default HeroStyled;
