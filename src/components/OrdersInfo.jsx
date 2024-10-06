import {
  Box,
  Container,
  Divider,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import OrdersBox from "./OrdersBox";
import React from "react";

function OrdersInfo({ orderInfo }) {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          border: "1px solid grey",
          minHeight: "200px",
          ml: 0,
          mb: 5,
        }}
      >
        <Grid2
          container
          sx={{
            pt: 1.5,
            mb: 1.5,
          }}
          size="12"
          justifyContent={"space-between"}
        >
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ mb: 2 }}>
            <Typography>OrderId : {orderInfo.orderId}</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "right" }}>
            <Typography>Total : ₹ {orderInfo.total}</Typography>
          </Grid2>
        </Grid2>

        <Box>
          <Typography variant="h6" sx={{ pb: 2, fontWeight: "bold" }}>
            Items
          </Typography>

          <Paper sx={{ background: "rgba(129, 133, 137,0.3)" }}>
            {orderInfo.itemsArray.map((obj, ind) => {
              return (
                <React.Fragment key={ind}>
                  <OrdersBox cartInfo={obj} />
                  {ind < orderInfo.itemsArray.length - 1 && (
                    <Divider
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        borderWidth: "1px",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Paper>
        </Box>

        <Box sx={{ py: 2 }}>
          <Typography>TimeStamp : {orderInfo.orderPlacedTime}</Typography>
        </Box>
      </Container>
    </>
  );
}

export default OrdersInfo;
