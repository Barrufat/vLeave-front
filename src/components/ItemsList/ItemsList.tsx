import { useAppSelector } from "../../store/hooks";
import Item from "../Item/Item";
import ItemsListStyled from "./ItemsListStyled";

const ItemsList = () => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <ItemsListStyled>
      <h1 className="page__main-title">Shop</h1>
      <ul className="items-list__wrapper">
        {items.map((item) => (
          <li key={item._id}>
            <Item Item={item} />
          </li>
        ))}
      </ul>
    </ItemsListStyled>
  );
};

export default ItemsList;
