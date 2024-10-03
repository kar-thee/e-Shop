import { Container, Typography } from "@mui/material";
import useShopStates from "../hooks/useShopStates";

function Orders() {
  const { placedOrders } = useShopStates();
  console.log(placedOrders, "placedOrders");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          my: 5,
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ my: "25%", pb: 2 }}>
          Order Placed Successfully !
        </Typography>
      </Container>
    </>
  );
}

export default Orders;
