import { Dispatch, SetStateAction } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconStar } from "../assets/icons";

import RatingLabel from "./RatingLabel";
import { Repository } from "../models";

const RepoItem = ({
  repo,
  setSelected,
  selected,
}: {
  repo: Repository;
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
}) => {
  const { id, name, stargazers_count, description } = repo;
  const selectedId = selected === id;

  return (
    <Box
      sx={selectedId ? { margin: 1, border: "1px solid #3B5998", paddingBottom: 1 } : { margin: 1 }}
    >
      <ListItem onClick={() => setSelected(id)}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "1px solid #3B5998",
              opacity: 0.26,
              paddingY: "12px",
              borderRadius: "2px",
              backgroundColor: "#A2B0CE",
            }}
          />
          <Box sx={{ width: 200, fontFamily: "Montserrat Regular", fontSize: "16px" }}>#{name}</Box>
          <Box
            sx={{
              width: 200,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <RatingLabel label={stargazers_count} icon={<IconStar />} width={80} height={24} />
          </Box>
          <ArrowDropDownIcon />
        </Box>
      </ListItem>
      {selectedId ? (
        <Box sx={{ paddingX: 2, paddingY: 2.5, color: "#3B5998" }}>
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Description:</Typography>
          {description}
        </Box>
      ) : null}
    </Box>
  );
};

export default RepoItem;
