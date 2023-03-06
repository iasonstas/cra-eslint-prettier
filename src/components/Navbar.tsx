import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
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
            label={isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon color="action" />}
          />
        </FormGroup>
      </Box>
    </nav>
  );
};

export default Navbar;
