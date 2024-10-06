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

function OrdersBox({ cartInfo }) {
  const dispatch = useShopDispatch();

  return (
    <>
      <Box
        sx={{
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
            //   pt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            {cartInfo.quantity} * {cartInfo.price} = ₹
            {cartInfo.price * cartInfo.quantity}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default OrdersBox;
