import {
  PokemonConsumer,
  PokemonContext,
  PokemonProvider,
} from "@/context/pokemon.context";
import Head from "next/head";
import styles from "@/styles/custom.module.css";
import { useRouter } from "next/router";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { pull } from "lodash";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CatchedContext } from "@/context/catched.context";
import { useContext, useState } from "react";
import Header from "@/components/header";

export default function DetailPage() {
  const router = useRouter();
  const pokemonName = router.asPath.replace("/", "");
  const { catchedPokemons, setCatchedPokemons } = useContext(CatchedContext);
  const [isCatched, setIsCatched] = useState(
    catchedPokemons.includes(pokemonName)
  );

  return (
    <PokemonProvider url={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}>
      <PokemonConsumer>
        {({ isLoading, pokemon }) => {
          return (
            <div className={styles.contentWrapper}>
              <Head>
                <title>{pokemonName}</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Header pageName="Details" />
              <div className={styles.content}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Card sx={{width: "100%"}}>
                    <CardHeader
                      avatar={
                        <Avatar
                          src={pokemon.sprites.front_default}
                          alt={pokemon.name}
                        />
                      }
                      title={
                        <Typography
                          sx={{
                            textTransform: "capitalize",
                            fontSize: "small",
                          }}
                        >
                          {pokemon.name}
                        </Typography>
                      }
                      sx={{
                        marginTop: "8px",
                        marginX: "15px",
                        padding: 0,
                        paddingBottom: "8px",
                        paddingX: "5px",
                        borderBottom: "1px solid green",
                      }}
                    />

                    <CardContent
                      sx={{
                        marginTop: "8px",
                        marginX: "15px",
                        padding: 0,
                        paddingBottom: "8px",
                        paddingX: "5px",
                        borderBottom: "1px solid green",
                      }}
                    >
                      <Typography sx={{ paddingY: "5px" }}>
                        Weight: {pokemon.weight}
                      </Typography>
                      <Typography sx={{ paddingY: "5px" }}>
                        Height: {pokemon.height}
                      </Typography>
                      <Typography sx={{ paddingTop: "5px" }}>
                        Not Hidden Abilities:
                      </Typography>
                      <List>
                        {pokemon.abilities.map((p) => {
                          if (p.is_hidden) return;
                          return (
                            <ListItem
                              key={p.ability.name}
                              sx={{
                                paddingY: 0,
                              }}
                            >
                              <Typography
                                sx={{
                                  textTransform: "capitalize",
                                  margin: 0,
                                  fontSize: "smaller",
                                }}
                              >
                                {p.ability.name}
                              </Typography>
                            </ListItem>
                          );
                        })}
                      </List>
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{ color: isCatched ? "black" : "green" }}
                        onClick={() => {
                          setCatchedPokemons((prev: string[]) => {
                            const newCatched: Array<string> = prev.includes(
                              pokemonName
                            )
                              ? pull(prev, pokemonName)
                              : [...prev, pokemonName];
                            setIsCatched(newCatched.includes(pokemonName));
                            return newCatched;
                          });
                        }}
                      >
                        {isCatched ? "Release" : "Catch"}
                      </Button>
                    </CardActions>
                  </Card>
                )}
              </div>
            </div>
          );
        }}
      </PokemonConsumer>
    </PokemonProvider>
  );
}
