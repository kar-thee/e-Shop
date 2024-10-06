import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  IconButton,
  Switch,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useShopDispatch from "../hooks/useShopDispatch";

function ProductTable({ row }) {
  const dispatch = useShopDispatch();
  const deleteProduct = () => {
    dispatch({
      type: "deleteProduct",
      payload: {
        pid: row.pid,
      },
    });
  };

  const activeStatusToggle = (checkedValue) => {
    dispatch({
      type: "updateProductStatus",
      payload: { pid: row.pid, toggleValue: checkedValue },
    });
  };

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
            to={`/detail/${row.prodName}`}
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
          <Switch
            defaultChecked={row.isActive}
            color="secondary"
            onChange={(ev) => activeStatusToggle(ev.target.checked)}
          />
        </TableCell>
        <TableCell align="center">
          <Box>
            <Tooltip title="Edit Product">
              <IconButton
                aria-label="edit"
                size="medium"
                component={Link}
                to="/settings/productedit"
                state={{ productInfo: row }}
              >
                <Edit fontSize="inherit" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Product">
              <IconButton
                aria-label="delete"
                size="medium"
                sx={{ color: "red" }}
                onClick={deleteProduct}
              >
                <Delete fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ProductTable;
