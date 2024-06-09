"use client";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdjustIcon from "@mui/icons-material/Adjust";
import {
  Box,
  Button,
  Divider,
  styled, Typography
} from "@mui/material";
import React from "react";

const ButtonStyled = styled(Button)<{ isActive?: boolean }>(({ isActive }) => ({
  borderColor: "#b34348",
  // color: "#000",
  ":hover": {
    borderColor: "#b34348",
    backgroundColor: "#ffe8ea",
  },
}));

export default function RecipeAction() {
  return (
    <Box py={2}>
      <Box display="flex" gap={2}>
        <AccessTimeIcon />
        <Box>
          <Typography variant="subtitle2">PREP</Typography>
          <Typography variant="subtitle2">10 mins</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">BAKE</Typography>
          <Typography variant="subtitle2">1hr to 1hr 15 mins</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">TOTAL</Typography>
          <Typography variant="subtitle2">1hr 10 mins</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" gap={2} alignItems="start">
        <AdjustIcon />
        <Box>
          <Typography variant="subtitle2">YIELD</Typography>
          <Typography variant="subtitle2">
            1loaf, 12 generous servings
          </Typography>
        </Box>
        <Box display="flex" gap={0.5} flexWrap="wrap">
          <ButtonStyled variant="outlined">Save recipe</ButtonStyled>
          <ButtonStyled variant="outlined" sx={{ ml: 1 }}>
            Print
          </ButtonStyled>
        </Box>
      </Box>
    </Box>
  );
}
