import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";

const LanguageControl = ({black}) => {
  
  const {i18n} = useTranslation();
  

  const handleChange = (code) => {  
    i18n.changeLanguage(code);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{color: black ? "#6e6e6e" : "#fff", fontWeight:'800'}}
      >
        {i18n.language}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
      >
        {
            LANGUAGES.map(({code, label}) => {
                return(
                <MenuItem key={code} sx={{textTransform:'uppercase'}}  onClick={() =>  {handleClose(); handleChange(code);}}>{label}</MenuItem>
                )
            })
        }
      </Menu>
    </div>
  );
};

export default LanguageControl;
