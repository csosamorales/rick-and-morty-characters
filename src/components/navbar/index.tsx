import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "assets/Rick-and-Morty.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { showMenuSelector } from "store/selectors";
import { setMenuShow } from "store/actions";
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NavBar = () => {
  const location = useLocation();
  const history = useHistory();
  const showMenu: boolean = useSelector(showMenuSelector);
  const dispatch = useDispatch();

  const handleOpenNavMenu = () => {
    dispatch(setMenuShow(!showMenu));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: "space-between", md: "center" } }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {location.pathname !== "/character" && (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
          {location.pathname === "/character" && (
            <Box sx={{ marginLeft: "10px" }}>
              <IconButton
                aria-label="delete"
                size="large"
                color="inherit"
                onClick={() => history.push("/")}
              >
                <ArrowBackIcon />
              </IconButton>
            </Box>
          )}
          <Box
            sx={{
              flexGrow: { xs: 1 },
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
            }}
          >
            <img src={logo} height="70px" alt="logo" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
