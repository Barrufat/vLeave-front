import { ItemStructure } from "../../store/fetaures/items/types";
import ItemStyled from "./ItemStyled";

interface ItemProps {
  Item: ItemStructure;
}

const Item = ({ Item: { name, mainImage } }: ItemProps) => {
  return (
    <ItemStyled>
      <img src={`./${mainImage}`} alt={name} width="100%" height="auto" />
      <span>{name}</span>
    </ItemStyled>
  );
};

export default Item;
