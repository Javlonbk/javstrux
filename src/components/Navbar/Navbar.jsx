import React, { useState, useEffect } from "react"; // Import useState and useEffect
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import navItems from "../../data/navbar";
import Logo from "../Logo/Logo";
import LanguageControl from "../LanguageControl/LanguageControl";
import { useTranslation } from "react-i18next";
import PhoneNumber from "../phoneNumber/PhoneNumber";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  const [scrollPosition, setScrollPosition] = useState(0); // Import useState

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (itemKey) => {
    setActiveItem(itemKey);
    handleCloseNavMenu();
  };

  const { t } = useTranslation();

  return (
    <AppBar
      sx={{
        backgroundColor: scrollPosition ? "#fff" : "transparent",
        marginTop: "0px",
        height: {xs:"80px", sm:"100px"},
        boxShadow: "none",
        color: scrollPosition ? "#6e6e6e" : "#fff",
        position: scrollPosition ? "fixed" : "static",
      }}
    >
      <Container maxWidth="xl" height="100%">
        <Toolbar
          sx={{
            height: {xs:"80px", sm:"100px"},
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* logo */}
          {scrollPosition ? <Logo scrollposition /> : <Logo />}

          {/* desktop menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: { xs: "50%", lg: "40%" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleMenuItemClick(item.key)}
                style={{
                  margin: "0 16px",
                  fontSize: "15px",
                  textDecoration: "none",
                  color: scrollPosition ? "#6e6e6e" : "#fff",
                  lineHeight: "24px",
                  borderBottom:
                    activeItem === item.key ? "2px solid #fff" : "none",
                  transition: "border-color 0.3s ease-out",
                  textTransform: "capitalize",
                }}
              >
                {t(`${item.label}`)}
              </a>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LanguageControl black={scrollPosition} />
             
            {/* contact  */}
           <PhoneNumber black={scrollPosition} />
            
            {/* mobil menu */}
            <Box
              sx={{
                width: "auto",
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon style={{ color: scrollPosition ? "#000" : "#fff" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  color: "#fff",
                  display: { xs: "block", md: "none" },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.key}
                    onClick={() => handleMenuItemClick(item.key)}
                  >
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => handleMenuItemClick(item.key)}
                      style={{
                        margin: "0 16px",
                        fontSize: "15px",
                        textDecoration: "none",
                        color: "#000",
                        lineHeight: "24px",
                        borderBottom:
                          activeItem === item.key ? "2px solid #000" : "none",
                        transition: "border-color 0.3s ease-out",
                        textTransform: "capitalize",
                      }}
                    >
                      {t(`${item.label}`)}
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
