import { useEffect } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import useItemsApi from "../../hooks/useItemsApi";
import { useDispatch } from "react-redux";
import { loadItemsActionCreator } from "../../store/fetaures/items/itemsSlice";

const ShopPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const getItems = useItemsApi();

  useEffect(() => {
    (async () => {
      const items = await getItems();

      if (!items) {
        return;
      }

      dispatch(loadItemsActionCreator(items));
    })();
  }, [dispatch, getItems]);

  return <ItemsList />;
};

export default ShopPage;
