import { Container, Grid2, Typography } from "@mui/material";
import CategoryCard from "../components/CategoryCard";
import useShopStates from "../hooks/useShopStates";

function CategoryListing() {
  const { categoriesArray } = useShopStates();
  return (
    <>
      <Container maxWidth="xl">
        {/* Product Category */}
        <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
          <Typography variant="h6">Categories</Typography>

          <Grid2
            container
            spacing={4}
            sx={{ justifyContent: "center", my: 2, pb: 2 }}
          >
            {categoriesArray.map(({ catName, catImgUrl }, ind) => (
              <CategoryCard
                categoryId={catName}
                categoryImg={catImgUrl}
                CategoryTitle={catName}
                key={ind}
              />
            ))}
          </Grid2>
        </Container>
      </Container>
    </>
  );
}

export default CategoryListing;
