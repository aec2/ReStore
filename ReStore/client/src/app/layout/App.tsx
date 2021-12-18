import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/Catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProducts() {
    setProducts((prevstate) => [
      ...prevstate,
      {
        id: prevstate.length + 101,
        name: "product" + (prevstate.length + 1),
        price: prevstate.length * 100 + 100,
        brand: "some brand",
        description: "some description",
        pictureUrl: "https://picsum.photos/200",
      },
    ]);
  }

  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProducts={addProducts} />
    </>
  );
}

export default App;
