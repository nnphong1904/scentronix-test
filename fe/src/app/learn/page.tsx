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
            Learn
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Learning
          </Link>
        </Breadcrumbs>
        <PageContent
          slots={{
            title: (
              <Typography
                variant="h1"
                sx={{ fontSize: "2rem", mb: 4, fontWeight: 400 }}
              >
                Learning Pages
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
            right: <PokemonDetails />,
          }}
        />
      </Container>
    </>
  );
}

type Pokemon = {
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
};

async function PokemonDetails() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const result = (await response.json()) as Pokemon;

  return (
    <Box display='flex' flexDirection='column'>
      <Box
        sx={{
          backgroundImage:
            "url('https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/b/b0/747px-132Ditto_Ranger3.png')",
          height: 200,
          width: 200,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <Typography>Name: {result.name}</Typography>
      <Typography>
        Abilities: {result.abilities.map((item) => item.ability.name).join(", ")}
      </Typography>
    </Box>
  );
}
