import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import useShopStates from "../hooks/useShopStates";
import useShopDispatch from "../hooks/useShopDispatch";

function Detail() {
  const { productId } = useParams();
  const { productsArray } = useShopStates();
  const dispatch = useShopDispatch();
  const navigate = useNavigate();

  const productToDisplay = productsArray.find(
    (obj) => obj.prodName === productId
  );

  const updateCart = () => {
    dispatch({ type: "updateCartInfo", payload: productToDisplay });
    navigate("/cart");
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" component="strong">
          {productToDisplay.category} / {productToDisplay.prodName}
        </Typography>

        <Container maxWidth="xl" sx={{ flexGrow: 1, my: 2, py: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8, lg: 7 }} sx={{ width: "100%" }}>
              <Box>
                <CardMedia
                  component="img"
                  height="400"
                  image={productToDisplay.prodImgUrl}
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 5 }}>
              <Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ pb: 2 }}
                  >
                    {productToDisplay.prodName}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ pb: 4 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", pl: 0.5 }}
                  >
                    ₹ {productToDisplay.price}
                  </Typography>

                  <CardActions sx={{ display: "flex", mb: 1, pl: 0.5 }}>
                    <Button
                      size="medium"
                      variant="contained"
                      sx={{
                        backgroundColor: "#6067b3",
                        textTransform: "none",
                        mt: 4,
                      }}
                      onClick={updateCart}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Detail;
