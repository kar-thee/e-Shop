import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import useShopDispatch from "../hooks/useShopDispatch";

function CartBox({ cartInfo }) {
  const dispatch = useShopDispatch();

  const handleDecrement = () => {
    if (cartInfo.quantity > 0) {
      dispatch({
        type: "decrementCartFromPid",
        payload: {
          productId: cartInfo.prodName,
          quantity: cartInfo.quantity - 1,
        },
      });
    } else {
      dispatch({
        type: "removeFromCartFromPid",
        payload: { productId: cartInfo.prodName },
      });
    }
  };

  const handleIncrement = () => {
    if (cartInfo.quantity <= cartInfo.availableStock - cartInfo.totalSold) {
      dispatch({
        type: "updateCartFromPid",
        payload: {
          productId: cartInfo.prodName,
          quantity: cartInfo.quantity + 1,
        },
      });
    }
  };

  return (
    <>
      {cartInfo.quantity > 0 && (
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleDecrement} color="secondary">
              <Remove />
            </IconButton>
            <Typography variant="body1">{cartInfo.quantity}</Typography>
            <IconButton
              onClick={handleIncrement}
              color="primary"
              disabled={
                cartInfo.quantity >=
                cartInfo.availableStock - cartInfo.totalSold
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
