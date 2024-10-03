import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  IconButton,
  Switch,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductTable({ row }) {
  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell
          align="center"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "60px" }}>
            <CardMedia
              component="img"
              height="48"
              image={row.prodImgUrl}
              alt="NA"
            />
          </Box>
        </TableCell>

        <TableCell align="center">
          {/* background: "rgba(119,136,153,0.6)", on hover we can change bg */}
          <Typography
            variant="p"
            component={Link}
            to="/"
            sx={{ textDecoration: "none" }}
          >
            {row.prodName}
          </Typography>
        </TableCell>

        <TableCell
          align="center"
          sx={{
            maxWidth: "300px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxHeight: "60px",
          }}
          className="text"
        >
          {row.prodDesc}
        </TableCell>
        <TableCell align="center">{row.price}</TableCell>
        <TableCell align="center">{row.availableStock}</TableCell>
        <TableCell align="center">{row.totalSold}</TableCell>

        <TableCell align="center">
          <Switch defaultChecked color="secondary" />
        </TableCell>
        <TableCell align="center">
          <Box>
            <IconButton aria-label="delete" size="medium">
              <Edit fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="medium" sx={{ color: "red" }}>
              <Delete fontSize="inherit" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ProductTable;
