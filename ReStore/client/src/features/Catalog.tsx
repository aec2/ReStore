import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../app/models/product";
import ProductList from "./catalog/ProductList";

interface Props {
  products: Product[];
  addProducts: () => void;
}

export default function Catalog({ products, addProducts }: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProducts}>
        ADD PRODUCT
      </Button>
    </>
  );
}
