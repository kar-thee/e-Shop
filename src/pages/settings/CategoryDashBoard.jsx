import { AddBox } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid2,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable";
import useShopStates from "../../hooks/useShopStates";
import useShopDispatch from "../../hooks/useShopDispatch";

function CategoryDashBoard() {
  const { categoriesArray, snackBarState } = useShopStates();
  const dispatch = useShopDispatch();

  const closeSnackBar = () => {
    dispatch({
      type: "closeSnackBar",
    });
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 1, my: 2, justifyContent: "center" }}>
        <Grid2
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ my: 2, py: 2 }}
        >
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Typography variant="h6">Categories List</Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }} justifyItems="flex-end">
            <Button
              startIcon={<AddBox />}
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#6067b3",
                textTransform: "none",
              }}
              component={Link}
              to="/settings/categorymgmt"
            >
              Add Category
            </Button>
          </Grid2>
        </Grid2>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ background: "lightgrey", color: "whitesmoke" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  In Stock
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Total Sold
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Status
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoriesArray.map((row, ind) => (
                <CategoryTable row={row} key={ind} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Snackbar
          open={snackBarState}
          autoHideDuration={8000}
          onClose={closeSnackBar}
          message="Can't Delete Category with Products"
        />
      </Container>
    </>
  );
}

export default CategoryDashBoard;
