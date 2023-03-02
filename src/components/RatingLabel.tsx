import { Box } from "@mui/material";

type Props = {
  label: number;
  icon: React.ReactNode;
  height: number;
  width: number;
};

const RatingLabel = ({ label, icon, height, width }: Props) => {
  return (
    <Box
      sx={{
        height,
        minWidth: width,
        border: "1px solid #3B5998",
        borderRadius: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "white" : theme.palette.background.default,
        zIndex: 99,

        display: "flex",
        paddingLeft: "3px",
        paddingRight: "21px",
        paddingY: "3px",
        alignItems: "center",
      }}
    >
      {icon}
      <Box sx={{ marginLeft: 1 }}> {label}</Box>
    </Box>
  );
};

export default RatingLabel;
