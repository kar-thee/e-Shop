import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" sx={{ my: 2, pb: 2 }}>
          Cart Items
        </Typography>

        <Container maxWidth="lg" sx={{ flexGrow: 1, my: 2, py: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }} sx={{ width: "100%" }}>
              <Stack>
                <Box
                  sx={{
                    border: "1px solid grey",
                    minHeight: "80px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    size="6"
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignContent={"center"}
                  >
                    <CardMedia
                      component="img"
                      height="64"
                      image="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                      alt="cart image"
                      sx={{ width: "64px" }}
                    />

                    <Stack sx={{ pl: 3, justifyContent: "center" }}>
                      <Typography>Tomato</Typography>
                      <Typography>₹ 100</Typography>
                    </Stack>
                  </Grid>

                  <Box>Increment buttons</Box>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Grid direction={"column"}>
                <Paper
                  sx={{ border: "1px solid grey", px: 1, minHeight: "300px" }}
                >
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{ my: 1, pb: 2, fontWeight: "bold" }}
                    >
                      Summary
                    </Typography>

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Tomato</Typography>
                      <Typography>2 * 100 = 200</Typography>
                    </Box>
                  </Stack>
                </Paper>

                <CardActions sx={{ display: "flex", mb: 1, pl: 0.5 }}>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      backgroundColor: "#6067b3",
                      textTransform: "none",
                      mt: 2,
                      width: "100%",
                    }}
                    component={Link}
                    to="/orders"
                  >
                    Place Order
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Cart;
