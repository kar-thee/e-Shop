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
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" component="strong">
          Categories / Vegetable
        </Typography>

        <Container maxWidth="xl" sx={{ flexGrow: 1, my: 2, py: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8, lg: 7 }} sx={{ width: "100%" }}>
              <Box>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
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
                    productName
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
                    ₹ productPrice
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
                      component={Link}
                      to="/cart"
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
