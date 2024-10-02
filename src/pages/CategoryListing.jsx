import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function CategoryListing() {
  return (
    <>
      <Container maxWidth="xl">
        {/* Product Category */}
        <Container maxWidth="xl" sx={{ my: 5, justifyContent: "center" }}>
          <Typography variant="h6">Categories</Typography>

          <Grid2
            container
            spacing={4}
            sx={{ justifyContent: "center", my: 2, pb: 2 }}
          >
            {[
              {
                title: "Vegetables",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "cat01",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },

              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
                catId: "dscsdc",
              },
              {
                title: "scsdc",
                img: "dca",
                catId: "dscsdc",
              },
            ].map(({ title, img, catId }, ind) => (
              <CategoryCard
                categoryId={catId}
                categoryImg={img}
                CategoryTitle={title}
                key={ind}
              />
            ))}
          </Grid2>
        </Container>
      </Container>
    </>
  );
}

export default CategoryListing;
