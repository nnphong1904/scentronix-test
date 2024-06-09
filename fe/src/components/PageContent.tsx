import { RecipeAction } from "@/components";

import { Box, Grid, Typography, GridProps } from "@mui/material";
import { ReactNode } from "react";

export const PageContent = ({
  slots,
  ...gridProps
}: {
  slots: {
    title: ReactNode;
    content: ReactNode;
    right?: ReactNode;
  };
} & GridProps) => {
  return (
    <Grid container spacing={2} alignItems="flex-start" {...gridProps}>
      <Grid item xs={12} md={slots?.right ? 6 : 12}>
        {slots.title}
        {slots.content}
        <RecipeAction />
      </Grid>

      {slots?.right && (
        <Grid item xs={12} md={6}>
          {slots.right}
        </Grid>
      )}
    </Grid>
  );
};
