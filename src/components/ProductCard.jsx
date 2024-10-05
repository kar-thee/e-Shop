import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useShopDispatch from "../hooks/useShopDispatch";
import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useShopStates from "../hooks/useShopStates";

function ProductCard({
  imgUrl,
  productName,
  productId,
  productPrice,
  availableStock,
  totalSold,
}) {
  const dispatch = useShopDispatch();
  const [quantity, setQuantity] = useState(0);
  const { inCart } = useShopStates();

  useEffect(() => {
    console.log(inCart, "inCart");
    if (inCart.length > 0) {
      const isProductInCart = inCart.find((val) => val.prodName === productId);
      if (isProductInCart) {
        console.log(isProductInCart, "isProductInCart");
        setQuantity(isProductInCart.quantity);
      }
    }
  });

  const updateCartFunc = () => {
    if (availableStock - totalSold > 0) {
      dispatch({
        type: "updateCartFromPid",
        payload: { productId, quantity: 1 },
      });
      setQuantity(1);
    }
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrementCartFromPid",
      payload: { productId, quantity: quantity - 1 },
    });
    setQuantity((prev) => prev - 1);
  };

  const handleIncrement = () => {
    console.log(
      quantity,
      availableStock,
      totalSold,
      "quantity, availableStock, totalSold"
    );
    if (quantity <= availableStock - totalSold) {
      dispatch({
        type: "updateCartFromPid",
        payload: { productId, quantity: quantity + 1 },
      });
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea component={Link} to={`/detail/${productId}`}>
          <CardMedia
            component="img"
            height="200"
            image={imgUrl}
            alt={productName}
            sx={{ minWidth: "299px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ₹{productPrice}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          {quantity === 0 ? (
            <>
              <Button
                size="small"
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#6067b3",
                  textTransform: "none",
                }}
                onClick={updateCartFunc}
                disabled={availableStock - totalSold > 0 ? false : true}
              >
                {availableStock - totalSold > 0
                  ? "Add to Cart"
                  : "Out of Stock"}
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={handleDecrement} color="secondary">
                <Remove />
              </IconButton>
              <Typography variant="body1">{quantity}</Typography>
              <IconButton
                onClick={handleIncrement}
                color="primary"
                disabled={quantity >= availableStock - totalSold}
              >
                <Add />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
