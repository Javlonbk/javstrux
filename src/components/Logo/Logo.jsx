import React from "react";
import { Box, Typography } from "@mui/material";

const Logo = ({black}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <img src="" style={{ width: "60px", marginTop: "10px" }} alt="" /> */}
      <Typography
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
          color: black ? '#6e6e6e' : '#fff',
          textAlign:'left'
        }}
      >
        JavStrux
      </Typography>
    </Box>
  );
};

export default Logo;
