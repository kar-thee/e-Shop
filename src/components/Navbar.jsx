import { Settings, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useShopStates from "../hooks/useShopStates";

function Navbar() {
  const { inCart } = useShopStates();
  return (
    <>
      <AppBar sx={{ background: "#455463" }} position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h6">E-Shop</Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              {/* Cart */}
              <Box sx={{ mr: { xs: 2, md: 3 } }} component={Link} to="/cart">
                <Tooltip title="Cart">
                  <IconButton>
                    <Badge badgeContent={inCart.length || "0"} color="primary">
                      <ShoppingCart sx={{ color: "#fff" }} />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Settings */}
              <Box
                sx={{ mr: { xs: 2, md: 3 } }}
                component={Link}
                to="/settings"
              >
                <Tooltip title="Settings">
                  <IconButton>
                    <Settings sx={{ color: "#fff" }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
