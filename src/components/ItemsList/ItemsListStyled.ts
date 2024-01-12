import styled from "styled-components";

const ItemsListStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .items-list {
    &__wrapper {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (min-width: 500px) {
    .items-list {
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
      }
    }
  }
`;

export default ItemsListStyled;
