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
import useShopStates from "../hooks/useShopStates";

function CategoryTable({ row }) {
  const dispatch = useShopDispatch();
  const { productsArray } = useShopStates();

  const deleteCategory = () => {
    const productsInThisCategory = productsArray.filter((obj) => {
      console.log(
        obj.category,
        row.catName,
        "obj.category === row.catName",
        obj.category === row.catName
      );
      if (obj.category === row.catName) {
        return obj;
      }
    });
    if (productsInThisCategory.length > 0) {
      //cant delete if any products present in the category
      dispatch({
        type: "openSnackBar",
      });
    } else {
      dispatch({
        type: "deleteCategory",
        payload: {
          cid: row.cid,
        },
      });
    }
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
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "60px" }}>
            <CardMedia
              component="img"
              height="48"
              image={row.catImgUrl}
              alt="NA"
            />
          </Box>
        </TableCell>

        <TableCell align="center">
          {/* background: "rgba(119,136,153,0.6)", on hover we can change bg */}
          <Typography
            variant="p"
            component={Link}
            to={`/settings/products/${row.catName}`}
            sx={{ textDecoration: "none" }}
          >
            {row.catName}
          </Typography>
        </TableCell>

        <TableCell align="center">{row.inStock}</TableCell>
        <TableCell align="center">{row.totalSold}</TableCell>

        <TableCell align="center">
          <Switch defaultChecked={row.isActive} color="secondary" />
        </TableCell>
        <TableCell align="center">
          <Box>
            <Tooltip title="Edit Category">
              <IconButton
                aria-label="edit"
                size="medium"
                component={Link}
                to="/settings/categoryedit"
                state={{ catInfo: row }}
              >
                <Edit fontSize="inherit" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Category">
              <IconButton
                aria-label="delete"
                size="medium"
                sx={{ color: "red" }}
                onClick={deleteCategory}
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

export default CategoryTable;
