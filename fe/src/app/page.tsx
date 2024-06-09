import { PageContent, RecipeAction } from "@/components";
import theme from "@/theme";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export default async function Home() {
  return (
    <>
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 2 }}
          separator={<NavigateNextIcon color="error" fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Shop
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Bread
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Quick bread
          </Link>
        </Breadcrumbs>
        <PageContent
          slots={{
            title: (
              <Typography
                variant="h1"
                sx={{ fontSize: "2rem", mb: 4, fontWeight: 400 }}
              >
                Whole-Grain Banana Bread
              </Typography>
            ),
            content: (
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages,
              </Typography>
            ),
            right: (
              <Box
                sx={{
                  backgroundImage: "url('/bread.jpg')",
                  height: 500,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
            ),
          }}
        />
      </Container>
    </>
  );
}
