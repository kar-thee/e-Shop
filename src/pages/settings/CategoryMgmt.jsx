import {
  Button,
  CardActions,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

function CategoryMgmt() {
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" sx={{ my: 2, pb: 2 }}>
          Add Category
        </Typography>

        <Grid2
          container
          sx={{ height: "250px", pl: 2 }}
          direction={"column"}
          justifyContent={"space-evenly"}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Category Name"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Category Image URL"
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

export default CategoryMgmt;
