import { AddBox } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid2,
  Paper,
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
import ProductTable from "../../components/ProductTable";

function ProductDashBoard() {
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
            <Typography variant="h6">Product List</Typography>
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
              to="/settings/productmgmt"
            >
              Add Product
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
                  Description
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  In stock
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
              {[
                {
                  name: "dscsdcs",
                  calories: "250",
                  calories: "250",
                  fat: "250",
                  carbs: "250",
                  protein: "20",
                },
                {
                  name: "dscsdcs",
                  calories: "250",
                  calories: "250",
                  fat: "250",
                  carbs: "250",
                  protein: "20",
                },
                {
                  name: "dscsdcs",
                  calories: "250",
                  calories: "250",
                  fat: "250",
                  carbs: "250",
                  protein: "20",
                },
              ].map((row, ind) => (
                <ProductTable row={row} key={ind} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default ProductDashBoard;
