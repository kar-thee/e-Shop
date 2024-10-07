import { Box, Container, Grid2, Typography } from "@mui/material";
import CategoryCard from "../components/CategoryCard";
import useShopStates from "../hooks/useShopStates";

function CategoryListing() {
  const { categoriesArray } = useShopStates();

  const activeCategoriesArray = categoriesArray.filter((obj) => obj.isActive);
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
            {activeCategoriesArray.length > 0 ? (
              activeCategoriesArray.map(({ catName, catImgUrl }, ind) => (
                <CategoryCard
                  categoryId={catName}
                  categoryImg={catImgUrl}
                  CategoryTitle={catName}
                  key={ind}
                />
              ))
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
                  <Typography variant="h4">No Category Available !</Typography>
                </Box>
              </>
            )}
          </Grid2>
        </Container>
      </Container>
    </>
  );
}

export default CategoryListing;
