import { Container, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import useShopStates from "../hooks/useShopStates";

function ProductListing() {
  const { catId } = useParams();
  const { productsArray } = useShopStates();
  const filteredArray = productsArray.filter((obj) => obj.category === catId);
  return (
    <>
      <Container maxWidth="xl">
        {/* Product Category */}
        <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
          <Typography variant="h6">{catId}</Typography>

          <Grid2
            container
            spacing={4}
            sx={{ justifyContent: "center", my: 2, pb: 2 }}
          >
            {filteredArray.map(({ prodName, prodImgUrl, price }, ind) => (
              <ProductCard
                imgUrl={prodImgUrl}
                productName={prodName}
                productId={prodName}
                productPrice={price}
                key={ind}
              />
            ))}
          </Grid2>
        </Container>
      </Container>
    </>
  );
}

export default ProductListing;
