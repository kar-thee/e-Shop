import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import useShopStates from "../hooks/useShopStates";
import CartBox from "../components/CartBox";
import OrdersBox from "../components/OrdersBox";
import OrdersInfo from "../components/OrdersInfo";

function Orders() {
  const { placedOrders } = useShopStates();
  console.log(placedOrders, "placedOrders");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          my: 5,
        }}
      >
        <Typography variant="h6" sx={{ pb: 2 }}>
          {placedOrders.length > 0 && "My Orders"}
        </Typography>

        {placedOrders.length > 0 ? (
          placedOrders.map((obj, ind) => (
            <OrdersInfo orderInfo={obj} key={obj.orderId} />
          ))
        ) : (
          <> No orders to Show</>
        )}
      </Container>
    </>
  );
}

export default Orders;
