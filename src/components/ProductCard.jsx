import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard({ imgUrl, productName, productId, productPrice }) {
  return (
    <>
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea component={Link} to={`/detail/${productId}`}>
          <CardMedia
            component="img"
            height="200"
            image={imgUrl}
            alt={productName}
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
          <Button
            size="small"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#6067b3",
              textTransform: "none",
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
