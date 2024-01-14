import { ItemStructure } from "../store/fetaures/items/types";

const useItemsApi = () => {
  const getItems = async (): Promise<ItemStructure[]> => {
    const response = await fetch("http://localhost:4000/items");
    const { items } = await response.json();

    return items;
  };

  return getItems;
};

export default useItemsApi;
