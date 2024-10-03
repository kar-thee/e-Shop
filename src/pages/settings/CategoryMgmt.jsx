import {
  Button,
  CardActions,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useShopDispatch from "../../hooks/useShopDispatch";
import { useNavigate } from "react-router-dom";

function CategoryMgmt() {
  const [state, setState] = useState({ catName: "", imgUrl: "" });
  const dispatch = useShopDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (ev) => {
    if (ev.target.name === "catName") {
      return setState((prevState) => ({
        ...prevState,
        catName: ev.target.value,
      }));
    }

    return setState((prevState) => ({
      ...prevState,
      imgUrl: ev.target.value,
    }));
  };

  const createCategory = () => {
    dispatch({
      type: "createCategory",
      payload: {
        catName: state.catName,
        catImgUrl: state.imgUrl,
        inStock: 10,
        totalSold: 0,
        isActive: true,
      },
    });
    navigate("/settings");
  };

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
              value={state.catName}
              name="catName"
              onChange={(ev) => onChangeHandler(ev)}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Category Image URL"
              variant="outlined"
              sx={{ width: "100%" }}
              value={state.imgUrl}
              name="catImgUrl"
              onChange={(ev) => onChangeHandler(ev)}
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
            onClick={createCategory}
          >
            Create
          </Button>
        </CardActions>
      </Container>
    </>
  );
}

export default CategoryMgmt;
