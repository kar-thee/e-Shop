import {
  Button,
  CardActions,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

function ProductMgmt() {
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" sx={{ my: 2, pb: 2 }}>
          Add Product
        </Typography>

        <Grid2
          container
          sx={{ height: "500px", pl: 2 }}
          direction={"column"}
          justifyContent={"space-evenly"}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Product Name"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Description"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} direction={"row"}>
            <TextField
              label="Price"
              variant="outlined"
              sx={{ width: "45%", mr: 2 }}
            />
            <TextField label="Stock" variant="outlined" sx={{ width: "45%" }} />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Product Image Url"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid2>
        </Grid2>

        <CardActions sx={{ display: "flex", mb: 1, pl: 2.5 }}>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#6067b3",
              textTransform: "none",
              mt: 1,
            }}
          >
            Create
          </Button>
        </CardActions>
      </Container>
    </>
  );
}

export default ProductMgmt;
