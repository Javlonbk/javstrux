import React from 'react'
import { Typography, Box } from '@mui/material'
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneNumber = ({black}) => {
  return (
    <Box component={"a"} sx={{display:"flex", alignItems:"center", color: black? "#6e6e6e" : "#fff"}} href="tel:+998900444401" >
     <Typography
              component={"h4"}
              fontSize="16px"
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              +998 90 044 44 01
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#00b2bf",
                color: "#fff",
                display: {xs:"none", mb:"flex"},
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <PhoneIcon sx={{ fontSize: "20px" }} />
            </Box>
    </Box>
  )
}

export default PhoneNumber