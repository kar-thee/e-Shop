import { Box, Container, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useShopStates from "../hooks/useShopStates";

function ProductListing() {
  const { catId } = useParams();
  const { productsArray } = useShopStates();
  const filteredArray = productsArray.filter(
    (obj) => obj.category === catId && obj.isActive && obj.availableStock > 0
  );

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
            {filteredArray.length > 0 ? (
              filteredArray.map(
                (
                  { prodName, prodImgUrl, price, availableStock, totalSold },
                  ind
                ) => (
                  <ProductCard
                    imgUrl={prodImgUrl}
                    productName={prodName}
                    productId={prodName}
                    productPrice={price}
                    availableStock={+availableStock}
                    totalSold={totalSold}
                    key={ind}
                  />
                )
              )
            ) : (
              <>
                <Box
                  sx={{
                    textAlign: "center",
                    my: 5,
                    py: 5,
                    border: "1px solid grey",
                    width: "80%",
                  }}
                >
                  <Typography variant="h4">No Products Available !</Typography>
                </Box>
              </>
            )}
          </Grid2>
        </Container>
      </Container>
    </>
  );
}

export default ProductListing;
