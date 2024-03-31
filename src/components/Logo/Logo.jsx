import React from "react";
import { Box } from "@mui/material";
import logoWhite from '../../assets/svg/logo-white.svg'
import logoBlack from '../../assets/svg/logo-black.svg'

const Logo = ({black, scrollposition}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width:{xs:"130px", sm:"200px"}
      }}
    >
      {
         black || scrollposition ?
         (
           <img src={logoBlack} style={{ width:'100%' }} alt="" />
         ):
         (
          <img src={logoWhite} style={{ width:'100%' }} alt="" />
         )
      }
      {/* <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: "block",
          ms: 2,
          mr: 3,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          textDecoration: "none",
          color: black || scrollposition ? '#6e6e6e' : '#fff',
          textAlign:'left'
        }}
      >
        JavStrux
      </Typography> */}
    </Box>
  );
};

export default Logo;
