import styled from "styled-components";

const ItemStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .item {
    &__title {
      font-size: ${({ theme }) => theme.typography.contentSize};
      font-weight: ${({ theme }) => theme.typography.contentWeight};
    }
  }
`;

export default ItemStyled;
