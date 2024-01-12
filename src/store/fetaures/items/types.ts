export interface ItemStructure {
  _id: string;
  name: string;
  collection: string;
  type: string;
  description: string;
  mainImage: string;
  detailImages: string[];
  model3D: string;
  price: number;
  stock: number;
  isAvaliable: boolean;
}

export type ItemStructureWithoutId = Omit<ItemStructure, "_id">;
