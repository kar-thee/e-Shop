import { Box, CardMedia, Grid2, Stack, Typography } from "@mui/material";

function CartBox({ cartInfo }) {
  console.log(cartInfo, "cartInfo");
  return (
    <>
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

        <Box>Increment buttons</Box>
      </Box>
    </>
  );
}

export default CartBox;
