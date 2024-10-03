import { AddBox } from "@mui/icons-material";
import {
  Box,
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
import { Link, useParams } from "react-router-dom";
import ProductTable from "../../components/ProductTable";
import useShopStates from "../../hooks/useShopStates";

function ProductDashBoard() {
  const params = useParams();
  const { productsArray } = useShopStates();
  const filteredArray = productsArray.filter(
    (obj) => obj.category === params.catId
  );
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
              {filteredArray.length > 0 &&
                filteredArray.map((row, ind) => (
                  <ProductTable row={row} key={ind} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {filteredArray.length === 0 && (
          <>
            <Box
              sx={{
                textAlign: "center",
                my: 5,
                py: 5,
                border: "1px solid grey",
                width: "100%",
              }}
            >
              <Typography variant="h4">No Products Available !</Typography>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default ProductDashBoard;
