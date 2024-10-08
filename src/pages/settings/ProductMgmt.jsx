import {
  Button,
  CardActions,
  Container,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useShopDispatch from "../../hooks/useShopDispatch";
import useShopStates from "../../hooks/useShopStates";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function ProductMgmt() {
  const [state, setState] = useState({
    prodName: "",
    prodDesc: "",
    price: "",
    availableStock: "",
    prodImgUrl: "",
    totalSold: 0,
    category: "",
  });
  const navigate = useNavigate();

  const dispatch = useShopDispatch();
  const { categoriesArray } = useShopStates();

  const onChangeHandler = (ev) => {
    switch (ev.target.name) {
      case "pname":
        setState((prev) => ({ ...prev, prodName: ev.target.value }));
        break;
      case "desc":
        setState((prev) => ({ ...prev, prodDesc: ev.target.value }));
        break;
      case "price":
        setState((prev) => ({ ...prev, price: ev.target.value }));
        break;
      case "availableStock":
        setState((prev) => ({ ...prev, availableStock: ev.target.value }));
        break;
      case "img":
        setState((prev) => ({ ...prev, prodImgUrl: ev.target.value }));
        break;
      case "category":
        setState((prev) => ({ ...prev, category: ev.target.value }));
        break;
      default:
        break;
    }
  };

  const createProduct = () => {
    dispatch({
      type: "createProduct",
      payload: {
        prodName: state.prodName,
        prodDesc: state.prodDesc,
        price: state.price,
        availableStock: state.availableStock,
        prodImgUrl: state.prodImgUrl,
        category: state.category,
        totalSold: state.totalSold,
        isActive: true,
        pid: uuid(),
      },
    });
    navigate(`/settings/products/${state.category}`);
  };

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
              value={state.prodName}
              name="pname"
              onChange={(ev) => onChangeHandler(ev)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Description"
              variant="outlined"
              sx={{ width: "100%" }}
              value={state.prodDesc}
              name="desc"
              onChange={(ev) => onChangeHandler(ev)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} direction={"row"}>
            <TextField
              label="Price"
              variant="outlined"
              sx={{ width: "45%", mr: 2 }}
              value={state.price}
              name="price"
              onChange={(ev) => onChangeHandler(ev)}
            />
            <TextField
              label="Stock"
              variant="outlined"
              sx={{ width: "45%" }}
              value={state.availableStock}
              name="availableStock"
              onChange={(ev) => onChangeHandler(ev)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Product Image Url"
              variant="outlined"
              sx={{ width: "100%" }}
              value={state.prodImgUrl}
              name="img"
              onChange={(ev) => onChangeHandler(ev)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="categorySelectLabel">Category</InputLabel>
              <Select
                labelId="categorySelectLabel"
                id="categorySelect"
                value={state.category}
                label="Category"
                name="category"
                onChange={(ev) => onChangeHandler(ev)}
                sx={{ width: "200%" }}
                required={true}
              >
                {categoriesArray.map((obj) => (
                  <MenuItem value={obj.catName} key={obj.cid}>
                    {obj.catName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
            onClick={createProduct}
          >
            Create
          </Button>
        </CardActions>
      </Container>
    </>
  );
}

export default ProductMgmt;
