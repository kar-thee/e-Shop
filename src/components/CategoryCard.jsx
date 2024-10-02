import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CategoryCard({ categoryId, categoryImg, CategoryTitle }) {
  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardActionArea component={Link} to={`/products/${categoryId}`}>
          <CardMedia
            component="img"
            height="240"
            image={categoryImg}
            alt={CategoryTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="p">
              {CategoryTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CategoryCard;
