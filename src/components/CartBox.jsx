import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useShopDispatch from "../hooks/useShopDispatch";

function CartBox({ cartInfo }) {
  console.log(cartInfo, "cartInfo box");
  const dispatch = useShopDispatch();
  const [quantity, setQuantity] = useState(cartInfo.quantity);

  const handleDecrement = () => {
    console.log("handleDecrement", quantity);
    if (quantity > 0) {
      console.log("handleDecrement if case", quantity);
      dispatch({
        type: "decrementCartFromPid",
        payload: { productId: cartInfo.prodName, quantity: quantity - 1 },
      });
      setQuantity((prev) => prev - 1);
    } else {
      console.log("handleDecrement else case", quantity);
      dispatch({
        type: "removeFromCartFromPid",
        payload: { productId: cartInfo.prodName },
      });
      setQuantity(0);
    }
  };

  const handleIncrement = () => {
    if (quantity <= cartInfo.availableStock - cartInfo.totalSold) {
      dispatch({
        type: "updateCartFromPid",
        payload: { productId: cartInfo.prodName, quantity: quantity + 1 },
      });
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <>
      {quantity > 0 && (
        <Box
          sx={{
            border: "1px solid grey",
            minHeight: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            mb: 2,
          }}
        >
          <Grid2
            container
            size="6"
            direction={"row"}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            <CardMedia
              component="img"
              height="64"
              image={cartInfo.prodImgUrl}
              alt={cartInfo.prodName}
              sx={{ width: "64px" }}
            />

            <Stack sx={{ pl: 3, justifyContent: "center" }}>
              <Typography>{cartInfo.prodName}</Typography>
              <Typography>₹ {cartInfo.price}</Typography>
            </Stack>
          </Grid2>

          <Box
            sx={{
              pt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleDecrement} color="secondary">
              <Remove />
            </IconButton>
            <Typography variant="body1">{quantity}</Typography>
            <IconButton
              onClick={handleIncrement}
              color="primary"
              disabled={
                quantity >= cartInfo.availableStock - cartInfo.totalSold
              }
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CartBox;
