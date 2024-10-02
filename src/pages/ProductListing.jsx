import { Container, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

function ProductListing() {
  const { catId } = useParams();

  return (
    <>
      <Container maxWidth="xl">
        {/* Product Category */}
        <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
          <Typography variant="h6">Vegetables (from catID) {catId}</Typography>

          <Grid2
            container
            spacing={4}
            sx={{ justifyContent: "center", my: 2, pb: 2 }}
          >
            {[
              {
                title: "Vegetables",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "cat01",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },

              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
              {
                title: "scsdc",
                img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg?w=300",
                catId: "dscsdc",
                productId: "p01",
                price: "100",
              },
            ].map(({ title, img, productId, price }, ind) => (
              <ProductCard
                imgUrl={img}
                productName={title}
                productId={productId}
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
