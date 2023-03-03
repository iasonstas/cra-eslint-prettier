import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { Dispatch, SetStateAction } from "react";
import FbRepositoryLabel from "./FbRepositoryLabel/FbRepositoryLabel";

type Props = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isDarkTheme, setIsDarkTheme }: Props) => {
  return (
    <nav data-testid="navbar">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <FbRepositoryLabel small />
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={() => setIsDarkTheme(!isDarkTheme)} />}
            label="Dark Theme"
          />
        </FormGroup>
      </Box>
    </nav>
  );
};

export default Navbar;
