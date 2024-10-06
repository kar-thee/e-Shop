import {
  Box,
  Button,
  CardActions,
  CardMedia,
  Container,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useShopStates from "../hooks/useShopStates";
import CartBox from "../components/CartBox";
import useShopDispatch from "../hooks/useShopDispatch";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Cart() {
  const { inCart } = useShopStates();
  const dispatch = useShopDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    const placedOrderInfo = {
      orderId: uuidv4(),
      orderPlacedTime: new Date().toISOString(),
      itemsArray: inCart,
      total: inCart.reduce((acc, obj) => {
        return acc + +obj.price * obj.quantity;
      }, 0),
    };
    dispatch({ type: "placeOrder", payload: placedOrderInfo });
    navigate("/orders");
  };

  useEffect(() => {
    console.log("inCart updated", inCart, inCart.length);
  }, [inCart]);

  return (
    <>
      <Container maxWidth="lg" sx={{ my: 5, justifyContent: "center" }}>
        <Typography variant="h6" sx={{ my: 2, pb: 2 }}>
          Cart Items
        </Typography>

        <Container maxWidth="lg" sx={{ flexGrow: 1, my: 2, py: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }} sx={{ width: "100%" }}>
              <Stack>
                {console.log(inCart, "inCart from withing", inCart.length)}
                {inCart.length > 0 ? (
                  inCart.map((cartObj, ind) => (
                    <CartBox cartInfo={cartObj} key={ind} />
                  ))
                ) : (
                  <Box sx={{ textAlign: "center", mt: 5 }}>
                    <Typography variant="h4"> Empty Cart :(</Typography>
                  </Box>
                )}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Grid direction={"column"}>
                <Paper
                  sx={{
                    border: "1px solid grey",
                    px: 1,
                    minHeight: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{ my: 1, pb: 2, fontWeight: "bold" }}
                    >
                      Summary
                    </Typography>

                    {inCart.length > 0 &&
                      inCart.map(
                        (cartObj, ind) =>
                          cartObj.quantity > 0 && (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                              key={ind}
                            >
                              <Typography>{cartObj.prodName}</Typography>
                              <Typography>
                                {cartObj.quantity} * {cartObj.price} = ₹
                                {cartObj.price * cartObj.quantity}
                              </Typography>
                            </Box>
                          )
                      )}
                  </Stack>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      pb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography>Total Amount</Typography>
                    <Typography>
                      ₹{" "}
                      {inCart.reduce((acc, obj) => {
                        return acc + +obj.price * obj.quantity;
                      }, 0)}
                    </Typography>
                  </Box>
                </Paper>

                <CardActions sx={{ display: "flex", mb: 1, pl: 0.5 }}>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      backgroundColor: "#6067b3",
                      textTransform: "none",
                      mt: 2,
                      width: "100%",
                    }}
                    disabled={inCart.length > 0 ? false : true}
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Cart;
