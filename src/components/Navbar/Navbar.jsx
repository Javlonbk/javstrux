import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

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

  const navItems = [
    { key: "aboutUs", label: "Biz haqmizda", href: "#about" },
    { key: "projects", label: "Bizning loyihalar", href: "#projects" },
    { key: "news", label: "Yangiliklar", href: "#faq" },
  ];

  return (
        <AppBar
          sx={{
            backgroundColor: "transparent",
            marginTop: "0px",
            height:"100px",
            boxShadow: "none",
            color: "#fff",
            position:"static"
          }}
        >
          <Container maxWidth="xl" height="100%">
            <Toolbar
              sx={{
                height:'100px',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src=""
                  style={{ width: "60px", marginTop: "10px" }}
                  alt=""
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "none", md: "block" },
                    ms: 2,
                    mr: 3,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  JavStrux
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: "40%",
                  justifyContent: "space-between",
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
                      color:"#fff",
                      lineHeight:"24px",
                      borderBottom:
                        activeItem === item.key ? "2px solid #fff" : "none",
                      transition: "border-color 0.3s ease-out",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </Box>

              {/* languages */}

              <Box sx={{ display: "flex", alignItems:'center' }}>
                <Typography component={"h4"} fontSize="16px">
                  +998 90 044 44 01
                </Typography>
                <Box sx={{width:'40px', height:'40px', borderRadius:'50%', background:'#00b2bf', display:'flex', justifyContent:'center', alignItems:'center',marginLeft:'10px' }}>
                  <PhoneIcon sx={{fontSize:'20px'}} />
                </Box>
              </Box>

              <Box
                sx={{
                  width: "auto",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="#fff"
                >
                  <MenuIcon />
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
                          color:"#000",
                          lineHeight:"24px",
                          borderBottom:
                            activeItem === item.key
                              ? "2px solid #000"
                              : "none",
                          transition: "border-color 0.3s ease-out",
                        }}
                      >
                        {item.label}
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default Navbar;
